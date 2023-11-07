// TODO: rename the file since it doesnt expose only useIsDesktopAndSmaller
import { useMedia } from '@jimdo/ui';

export function useIsDesktopAndSmaller() {
    return useMedia(['(max-width: 992px)'], [true], false);
}

export function useIsTabletAndLarger() {
    return useMedia(['(min-width: 768px)'], [true], false);
}
