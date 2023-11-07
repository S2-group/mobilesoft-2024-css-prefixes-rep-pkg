/* global jQuery, _, wteVars, navigator */

/**
 * Tracks custom event tracking.
 */

/**
 * Contents:
 * 0. Global function for creating an arbitrary tracks event
 * 		0.1. Function to check if tracks can be sent (checks cookie consent)
 * 		0.2. Function to check if tracks can be sent (checks cookie consent)
 * 		0.3. Function to add callback triggering tracking request to queue (until cookie banner
 * 		is accepted)
 * 1. Home page tracking - REMOVED
 * 2. Downloads
 * 		2.1. Free downloads
 * 		2.2. Subscription downloads
 * 		2.3. Normal downloads
 * 3. Storefront
 * 		3.1. Storefront landing downloads
 * 		3.2. Storefront landing demo clicked
 * 		3.3. Storefront landing all extensions clicked
 * 		3.4. Storefront landing single extension clicked
 * 		3.5. Storefront landing all child themes clicked
 * 		3.6. Storefront landing single child theme clicked
 * 4. WooCommerce
 * 		4.1. WooCommerce downloads
 * 		4.2. WooCommerce installs
 * 		4.4. View WooCommerce overview video
 * 		4.5. Download WooCommerce features PDF
 *		4.6  Get started CTA in footer
 * 5. WooExperts
 * 		5.1. WooExpert Contact clicked
 * 		5.2. WooExpert Website clicked
 * 6. Support / Tickets
 * 		6.1. Ticket submitted
 * 		6.2. Ticket replies
 * 		6.3. Ticket solved by user
 * 		6.4. Ticket submission form message - docs self service link clicked
 * 		6.5. Ticket submission form - related docs link clicked
 * 		6.6. Ticket submitted after a related docs link has been clicked
 * 		6.7 View tickets - Doc CTA link clicked
 * 7. Hosting Solutions
 * 		7.1. Order received - view hosting plans button clicked
 * 		7.2. WC Hosting Bluehost clicked
 * 		7.3. WC Hosting Siteground clicked
 * 		7.4. Theme Hosting Bluehost clicked
 * 8. My Account
 * 		8.1. My Account - Licenses - renew button clicked
 *		8.2. My Account - Downloads - downloads WooCommerce from dashboard
 * 9. Auto-renewals
 * 		Note: We are recording the actual actions a user takes for these metrics.
 * 		eg. If a credit card is removed, all licenses get auto-renew turned off.
 * 		That won't be recorded as a user turning auto-renew off.
 *
 * 		9.1	 My Account - post auto-renew purchase - auto-renew turned on
 * 		9.2	 My Account - post auto-renew purchase - auto-renew turned off
 * 		9.3	 My Account - pre auto-renew purchase - auto-renew turned on
 * 		9.4	 My Account - pre auto-renew purchase - auto-renew turned off
 * 		9.5	 My Account - credit card added through my account
 * 		9.6	 My Account - credit card removed through my account
 * 10. Extensions
 * 		10.1 Use of search field on extensions pages
 * 11. Blog
 * 		11.1 Blog - twitter share button clicked
 * 		11.2 Blog - facebook share button clicked
 * 12. WooThemes landing page
 *		12.1 eCommerce - clicks on the eCommerce themes button
 *		12.2 Personal - clicks on the Personal/Business themes button
 *		12.3 All Themes Package - clicks on the All Themes Package
 * 15.	Other events not based on click events
 *		15.1 Event handler for tracking events
 * 16.	Product Pages
 *		16.1 Staff Picks
 *		16.2 Clicks on bread crumbs
 *		16.3 Click "add to cart" on product page ("new" layout)
 *		16.4 Clicks on "Add to cart" on pages like WooCommerce Essentials. Links with attribute
 *			[href*="add-cart-item="] do not redirect to cart.
 * 17.	Partners Pages
 *		17.1 Partner logo click
 * 18.	General click tracking
 * 19.	Sensei
 *		19.1 Live demo click
 */

/**
 * 0. Global function for creating an arbitrary tracks event.
 *
 * Event name will have a prefix added. So if you pass 'banner_shown', the event
 * stored on Tracks is 'woocommercecom_banner_shown'.
 *
 * Properties can be an empty object, or an object with arbitrary keys and values
 * for storage with event.
 *
 * If user didn't consent to cookies yet then the request is not triggered. This check can be
 * suppressed with `skipCookieConsentCheck` parameter.
 *
 * @param  string eventName
 * @param  object properties
 * @param  bool   skipCookieConsentCheck
 */
// eslint-disable-next-line
var wccom = wccom || {};
wccom.fireTracksEvent = function( eventName, properties, skipCookieConsentCheck ) {
	// eventName should follow pattern ^[a-z_][a-z0-9_]*$
	// if it doesn't, let's log the error but still send an event to allow legacy code to work
	if ( ! eventName.match( /^[a-z_][a-z0-9_]*$/ ) ) {
		// eslint-disable-next-line no-console
		console.error( `Event name "${eventName}" not of the form <source>_<context>_<action>` );
	}

	const fireEvent = () => {
		if ( 'undefined' === typeof properties ) {
			properties = {};
		}
		// Add referer info to ajax request if not defined already.
		wccom.fillReferer( properties );
		// Save the current page's URL
		properties.current_url = window.location.href; // eslint-disable-line camelcase

		const formData = new FormData();
		formData.append( 'action', 'woothemes_tracks_ajax' );
		formData.append( 'event_name', eventName );

		for ( const key of Object.keys( properties ) ) {
			formData.append(
				'properties[' + key + ']',
				properties[ key ],
			);
		}

		// Use Beacon if the browser supports it.
		// https://caniuse.com/beacon
		if ( navigator.sendBeacon ) {
			const success = navigator.sendBeacon(
				wteVars.ajaxurl,
				formData,
			);
			if ( success ) {
				return;
			}
		}

		// If the browser doesn't support the Beacon API, or if it fails, fallback to jQuery
		const data = {
			action: 'woothemes_tracks_ajax',
			// eslint-disable-next-line quote-props
			'event_name': eventName,
			properties,
		};

		jQuery.post( wteVars.ajaxurl, data, function() { } );
	};

	if ( skipCookieConsentCheck || wccom.canTrackUser( 'analytics' ) ) {
		fireEvent();
	} else {
		// Add event to queue to fire once user has agreed to analytics tracking
		wccom.addTrackCallback( fireEvent );
	}
};

/**
 * 0.1. Removed in https://github.com/Automattic/woocommerce.com/pull/14791.
 *
 * canSendTracks was a function that checked for the presence of the `woo_tk_ai` cookie.
 * If the cookie existed, or if the user was logged in, we assumed it was safe to
 * send Tracks events. This was to address issues where a `woo_tk_ai` cookie was set
 * several times with different anon IDs as the page loaded.
 *
 * We still do a similar check, but now we look for the `wccom_cookie_consent_analytics`
 * cookie with value `granted`. If that cookie is set, the user has consented
 * to tracking, and (if they're logged out) the `woo_tk_ai` cookie is likely
 * also set.
 */

/**
 * 0.2. Function returning a promise that completes once a woo_tk_ai cookie has been set.
 *
 * We have analytics tracking for all users by default.
 *
 * This function is designed to deal with problems caused by several woo_tk_ai cookies with
 * different anon IDs being set in quick succession as the page loads.
 *
 * @return {Promise} once promise completes it means user agreed to cookie policy
 */
wccom.waitUntilCanSendTracks = function() {
	return new Promise( ( resolve ) => {
		function checkIfCanSendTracks() {
			if ( wccom.canTrackUser( 'analytics' ) ) {
				resolve();
			} else {
				setTimeout( checkIfCanSendTracks, 250 );
			}
		}

		checkIfCanSendTracks();
	} );
};

/**
 * 0.3. Add callback to be executed once user consents to the cookie policy.
 * Once the callback is added, periodically check if user consented to cookie policy.
 * When it happens, execute all callbacks.
 *
 * @param {Function} callback add callback to be triggered once user consents to cookies
 */
wccom.addTrackCallback = ( function prepareAddTrackCallback() {
	var callbackQueue = [];
	var waitPromise = null;

	function processCallbacks() {
		callbackQueue.forEach( callback => callback() );
		callbackQueue = [];
	}

	return function addTrackCallback( callback ) {
		if ( 'function' !== typeof callback ) {
			return;
		}

		callbackQueue.push( callback );
		if ( ! waitPromise ) {
			waitPromise = wccom.waitUntilCanSendTracks();
			waitPromise.then( () => processCallbacks() );
		}
	};
} )();

/**
 * Global function for setting the referer on the properties object.
 *
 * @param {Object} properties Tracks properties object.
 */
wccom.fillReferer = function( properties ) {
	if ( 'undefined' === typeof properties._via_ref || '' === properties._via_ref ) {
		// eslint-disable-next-line camelcase
		properties._via_ref = '' !== document.referrer
			? document.referrer
			: window.location.href;
	}
};

jQuery( function() {
	/**
	 * 2. Downloads
	 */
	// 2.1. Free downloads
	// TODO: Determine do we need to recover the following piece of code.
	// Context: 'free_download' event works only for Storefront theme, the code below doesn't work.
	// Query for analysis: https://mc.a8c.com/pb/2a1cd/.
	jQuery( 'form.cart button' ).click( function() {
		//Do we have a free download?
		if (
			0 < jQuery( this ).closest( 'form' ).children( 'input[name="free_product"]' ).length
		) {
			var product = jQuery( this ).siblings( '#product_id' ).val();
			wccom.fireTracksEvent(
				'free_download',
				// eslint-disable-next-line
				{ product_name: product }
			);
		}
	} );

	// 2.2. Subscription Downloads
	jQuery( '#subscription-download' ).click( function() {
		var product = jQuery( this ).data( 'product-name' );

		wccom.fireTracksEvent(
			'subscription_download',
			// eslint-disable-next-line
			{ product_name: product }
		);
	} );

	// 2.3. Normal Downloads
	// TODO: Maybe remove this event sending because there's no #normal-download element
	jQuery( '#normal-download' ).click( function() {
		var product = jQuery( this ).data( 'product-name' );

		wccom.fireTracksEvent(
			'normal_download',
			// eslint-disable-next-line
			{ product_name: product }
		);
	} );

	/**
	 * 3. Storefront
	 */

	// 3.1. Storefront downloads
	jQuery( '.page-template-template-storefront .download' ).click( function() {
		wccom.fireTracksEvent(
			'free_download',
			// eslint-disable-next-line
			{ product_name: 'Storefront' }
		);
		wccom.fireTracksEvent( 'storefront_landing_downloaded' );
	} );

	// 3.2. Storefront demo
	jQuery( '.page-template-template-storefront .view-demo' ).click( function() {
		wccom.fireTracksEvent(
			'demo_link_clicked',
			// eslint-disable-next-line
			{ product_name: 'Storefront' }
		);
		wccom.fireTracksEvent( 'storefront_landing_demo_clicked' );
	} );

	// 3.3. Storefront all extensions clicked
	jQuery( '.storefront-template .view-storefront-extensions' ).click( function() {
		wccom.fireTracksEvent( 'storefront_landing_all_extensions_clicked' );
	} );

	// 3.4. Storefront single extension clicked
	jQuery( '.storefront-template .term-woocommerce-extensions .product > a' ).click( function() {
		var product = jQuery( this ).data( 'product-name' );
		wccom.fireTracksEvent(
			'storefront_landing_single_extension_clicked',
			// eslint-disable-next-line
			{ product_name: product }
		);
	} );

	// 3.5. Storefront all child themes clicked
	jQuery( '.storefront-template .view-storefront-themes' ).click( function() {
		wccom.fireTracksEvent( 'storefront_landing_all_child_themes_clicked' );
	} );

	// 3.6. Storefront single theme clicked
	jQuery( '.storefront-template .term-themes .product > a' ).click( function() {
		var product = jQuery( this ).data( 'product-name' );
		wccom.fireTracksEvent(
			'storefront_landing_single_child_theme_clicked',
			// eslint-disable-next-line
			{ product_name: product }
		);
	} );

	/**
	 * 4. WooCommerce
	 */

	// 4.1. WooCommerce downloads
	jQuery( 'a.wc-download' ).click( function() {
		var location = jQuery( this ).data( 'location' );
		wccom.fireTracksEvent( 'woocommerce_download', { location } );
	} );

	// 4.2. WooCommerce install
	jQuery( '#wc-install-button' ).click( function() {
		wccom.fireTracksEvent( 'woocommerce_install' );
	} );

	// 4.4. View overview video
	jQuery( '#wc_introduction .wc_learn_more' ).click( function() {
		wccom.fireTracksEvent( 'woocommerce_overview_video_view' );
	} );

	// 4.6. Get Started CTA in footer
	jQuery( '.wc-get-started' ).click( function() {
		wccom.fireTracksEvent( 'woocommerce_footer_get_started' );
	} );

	/**
	 * 5. WooExperts
	 */
	jQuery( '.wooexperts-single a.wooexpert-contact' ).on( 'click', function() {
		var wooexpert = jQuery( this ).data( 'wooexpert' );
		wccom.fireTracksEvent( 'wooexpert_contact_clicked', { wooexpert } );
	} );
	jQuery( '.wooexperts-single a.wooexpert-website' ).on( 'click', function() {
		var wooexpert = jQuery( this ).data( 'wooexpert' );
		wccom.fireTracksEvent( 'wooexpert_website_clicked', { wooexpert } );
	} );

	/**
	 * 6. Support / Tickets
	 */

	// Ticket submitted
	jQuery( document ).on( 'ticketSubmitted', function( event, id, area ) {
		wccom.fireTracksEvent(
			'ticket_submitted',
			{
				// eslint-disable-next-line
				ticket_id: id,
				area,
			},
		);
	} );

	// Ticket replied
	jQuery( document ).on( 'ticketReplied', function( event, id ) {
		wccom.fireTracksEvent(
			'ticket_replied',
			// eslint-disable-next-line
			{ 'ticket_id': id },
		);
	} );

	// Ticket solved by user
	jQuery( document ).on( 'ticketSolvedByUser', function( event, id ) {
		wccom.fireTracksEvent(
			'ticket_solved_by_user',
			// eslint-disable-next-line
			{ 'ticket_id': id },
		);
	} );

	// Ticket submission form message docs self service link clicked
	jQuery( '.create-ticket-docs-ss-link' ).click( function() {
		wccom.fireTracksEvent( 'ticket_submission_docs_self_service_clicked' );
	} );

	// Ticket submission form related docs link clicked
	jQuery( '#wc-zendesk-ticket-form' ).on( 'click', '.related-docs-link', function() {
		var relatedDocTitle = jQuery( this ).attr( 'title' );
		var relatedDocUrl = jQuery( this ).attr( 'href' );
		var area = jQuery( this ).parents( 'form' ).attr( 'class' ).split( ' ' ).pop();
		var paying = jQuery( this )
			.parents( '#wc-zendesk-container' )
			.attr( 'class' )
			.split( ' ' )
			.pop();

		wccom.fireTracksEvent(
			'ticket_submission_related_docs_link_clicked',
			{
				// eslint-disable-next-line
				document_title: relatedDocTitle,
				// eslint-disable-next-line
				document_url: relatedDocUrl,
				form: area,
				// eslint-disable-next-line
				paying_customer: paying
			},
		);
	} );

	// Ticket submitted after a related docs link has been clicked
	jQuery( '.wc-zendesk-ticket-form' ).on( 'submit', function() {
		var inputHidden = jQuery( this ).find( '#related-docs-link-clicked' );
		if ( inputHidden !== undefined && 'yes' === inputHidden.val() ) {
			wccom.fireTracksEvent( 'ticket_submission_ticket_submitted_after_related_docs_click' );
		}
	} );

	// Docs CTA link clicked
	jQuery( '#wc-zendesk-container.view-all-tickets .woocommerce-message' )
		.on( 'click', 'a', function() {
			wccom.fireTracksEvent( 'view_tickets_docs_cta_clicked' );
		} );
	/**
	 * 7. Hosting Solutions
	 */
	// Order received View [hosting] plans button clicked - sends host name too
	jQuery( '.wc-order-confirmed .need-hosting a.button' ).click( function() {
		var host = jQuery( this ).data( 'host' );
		wccom.fireTracksEvent( 'order_received_need_hosting_clicked', { host } );
	} );

	//Track Upgrade click for themes
	jQuery( '.upgrade_product' ).click( function() {
		wccom.fireTracksEvent( 'upgrade_theme_clicked' );
	} );

	//Click demo link
	jQuery( '#theme_demo_link' ).click( function() {
		var theme = '';
		theme = jQuery( this ).data( 'theme-name' );
		wccom.fireTracksEvent(
			'demo_link_clicked',
			// eslint-disable-next-line
			{ 'product_name': theme }
		);
	} );

	//Click buy now link
	jQuery( '#theme_buynow_link' ).click( function() {
		var theme = '';
		theme = jQuery( this ).data( 'theme-name' );
		wccom.fireTracksEvent(
			'buy_now_link_clicked',
			// eslint-disable-next-line
			{ 'product_name': theme }
		);
	} );

	//Click Recommended product
	jQuery( '.wc-prl-recommendations a.add_to_cart_button' ).click( function() {
		var recommendedProduct = jQuery( this ).data( 'product_id' );
		wccom.fireTracksEvent(
			'recommended_product_add_to_cart_clicked',
			// eslint-disable-next-line
			{ product_id: recommendedProduct }
		);
	} );
	jQuery( '.wc-prl-recommendations a.woocommerce-LoopProduct-link' ).click( function() {
		var recommendedProduct = jQuery( this ).parent().find( 'a.add_to_cart_button' );
		recommendedProduct = recommendedProduct.data( 'product_id' );
		wccom.fireTracksEvent(
			'recommended_product_view_clicked',
			// eslint-disable-next-line
			{ product_id: recommendedProduct }
		);
	} );

	/**
	 * 8. My Account.
	 */

	// 8.1. License renew button clicked (and how many licenses attempted to renew)
	jQuery( document ).on( 'licenseBulkRenewButtonClicked', function( event, count ) {
		wccom.fireTracksEvent(
			'bulk_renew_license_button_clicked',
			// eslint-disable-next-line
			{ 'number_of_licenses_checked': count }
		);
	} );

	// 8.2. My Account - Downloads - downloads WooCommerce from dashboard
	jQuery( '.page-template-template-my-account .my-account-download' ).click( function() {
		wccom.fireTracksEvent( 'woocommerce_my_account_download' );
	} );

	/**
	 * 9. Auto-renewals
	 */

	// 9.1. My Account - post auto-renew purchase - auto-renew turned on
	// 9.2.	My Account - post auto-renew purchase - auto-renew turned off
	// 9.3. My Account - pre auto-renew purchase - auto-renew turned on
	// 9.4.	My Account - pre auto-renew purchase - auto-renew turned off
	jQuery( document ).on( 'licenseAutoRenewToggled', function( e, product, key, state, period ) {
		const params = {
			product,
			key, // for uniqueness
		};

		wccom.fireTracksEvent( period + '_auto_renew_purchase_auto_renew_' + state, params );
	} );

	// 9.5.	My Account - credit card added through my account - recorded SS
	// 9.6.	My Account - credit card removed through my account - record SS

	/**
	 * 10. Extensions
	 */

	// 10.1 Use of search field on extensions pages
	jQuery(
		'.term-woocommerce-extensions #extension-search-input',
	).on( 'keyup', _.debounce( function() {
		var searchTerm = jQuery( '#extension-search-input' ).val();

		if ( 0 < searchTerm.length ) {
			wccom.fireTracksEvent(
				'search_on_extensions_page',
				// eslint-disable-next-line
				{ 'search_term': searchTerm }
			);
		}
	}, 1500 ) );

	/**
	 * 11. Blog
	 */

	// 11.1 Blog - twitter share button clicked
	jQuery( '#blog-social-sharing a.twitter' ).click( function() {
		wccom.fireTracksEvent( 'twitter_share_on_blog_clicked' );
	} );

	// 11.2 Blog - facebook share button clicked
	jQuery( '#blog-social-sharing a.facebook' ).click( function() {
		wccom.fireTracksEvent( 'facebook_share_on_blog_clicked' );
	} );

	// 15.1 Event handler for tracking events
	jQuery( document ).on( 'wtTracksRecord', function( e ) {
		wccom.fireTracksEvent( e.detail.name, e.detail.props );
	} );

	// 16.1 Clicks on bread crumbs
	jQuery(
		'nav.woocommerce-breadcrumb a',
	).click( function( e ) {
		var properties = {
			label: e.delegateTarget.text,
			href: e.delegateTarget.href,
			url: document.location.href,
		};
		wccom.fireTracksEvent( 'bread_crumb_clicked', properties );
	} );

	// 16.3 Clicks on "add to cart" on product page ("new" layout)
	jQuery(
		'.single_add_to_cart_button',
	).click( function( e ) {
		var hasPaymentMethod = e.delegateTarget.dataset.tracksHas_payment_method;
		var position = e.delegateTarget.dataset.tracksPosition;
		var isPaid = e.delegateTarget.dataset.tracksIs_paid;

		wccom.fireTracksEvent( 'add_to_cart_button_clicked', {
			// eslint-disable-next-line
			has_payment_method: hasPaymentMethod,
			position,
			// eslint-disable-next-line
			is_paid: isPaid,
		} );
	} );

	// 16.4 Clicks on "Add to cart" on pages like WooCommerce Essentials. Links with attribute
	// [href*="add-cart-item="] do not redirect to cart.
	jQuery(
		'a[href*="add-cart-item="]',
	).click( function( e ) {
		var productId = e.delegateTarget.href
			.split( 'add-cart-item=' )[ 1 ].replace( /[^\d]/g, '' );
		if ( productId ) {
			wccom.fireTracksEvent( 'add_cart_item_button_clicked', {
				// eslint-disable-next-line
				product_id: parseInt( productId, 10 ),
			} );
		}
	} );

	// 17.1 Staff Picks
	jQuery(
		'.wccom-partners__logo',
	).click( function( e ) {
		wccom.fireTracksEvent( 'partner_logo_click', { partner: e.delegateTarget.title } );
	} );

	// 18.0 General Click Tracking
	//
	// To send an event on click:
	//     1) add attribute "data-tracks" with the tracks event name as value
	//     2) add attributes like "data-tracks-keyname=value" to add properties to the tracks event.
	//
	// For example, the following anchor tag will log a "woocommercecom_myclick"
	// event with property "button_position" of "eight".
	//
	// <a href="#" data-tracks="myclick"
	// data-tracks-button_position="eight">x</a>
	//
	// Hyphens in property names will be dropped. If you need a multi-word
	// property name, use underscores.
	jQuery( document ).on( 'click', '[data-tracks]', function( e ) {
		var eventName = e.currentTarget.dataset.tracks;
		var properties = {};
		if ( ! eventName ) {
			return;
		}
		for ( var key in e.currentTarget.dataset ) {
			if ( e.currentTarget.dataset.hasOwnProperty( key ) &&
				'tracks' === key.substring( 0, 6 ) &&
				'tracks' !== key ) {
				properties[ key.substring( 6 ).toLowerCase() ] = e.currentTarget.dataset[ key ];
			}
		}

		// Replace admin URL with current url if needed. Admin URL can be added to code
		// generated by blocks.
		if ( properties.url?.includes( '/wp-admin/' ) ) {
			properties.url = document.location.href;
		}
		wccom.fireTracksEvent( eventName, properties );
	} );

	// Cart continue link clicked - Cart shortcode
	jQuery( 'body' ).on( 'click', '#cart-continue-button', function() {
		wccom.fireTracksEvent( 'cart_continue_button_clicked' );
	} );

	// Cart continue link clicked - Gutenberg block
	jQuery( 'body' ).on( 'click', '.wc-block-cart__submit-button', function() {
		wccom.fireTracksEvent( 'cart_continue_button_clicked' );
	} );

	// 19.1 Sensei Live Demo clicked
	jQuery( '.live-demo' ).click( function() {
		/* eslint-disable */
		if ( jquery_blockui_params && jquery_blockui_params.productName &&
			'Sensei' === jquery_blockui_params.productName ) {
			/* eslint-enable */
			wccom.fireTracksEvent(
				'demo_link_clicked',
				// eslint-disable-next-line
				{ product_name: 'Sensei' }
			);
		}
	} );
} );
