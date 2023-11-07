/**
 * "The safest way to summon emojis"
 * source: https://thenewstack.io/tutorial-getting-creative-with-console-statements/
 * emojis: https://unicode.org/emoji/charts/full-emoji-list.html
 */
const wavingEmoji = String.fromCodePoint(0x1f590);

const logoStyle = `
    font-family: "Fat-Frank", "Arial", sans-serif;
    font-size: 50px;
    font-weight: bold;
    line-height: 0.85;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    word-break: break-word;
    word-spacing: 0.05em;
    color: #010233;
    background-color: white;
    border: 4px solid #010233;
    padding: 7px 10px;
`;

const textStyle = `
    font-family: "Fat-Frank", "Arial", sans-serif;
    font-size: 15px;
    line-height: 26px;
`;

const logo = '%cJIMDO%c';
const motto = `%cHey ${wavingEmoji} Do you want to help small businesses start, grow, and thrive online?`;
const weAreHiring = 'We’re hiring! Join us: https://careers.jimdo.com/';
const message = [logo, motto, weAreHiring].join('\n');

export function printJoinJimdoMessage() {
    // eslint-disable-next-line no-console
    console.log(message, logoStyle, null, textStyle);
}
