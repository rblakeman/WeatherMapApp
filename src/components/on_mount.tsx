import { useEffect, type EffectCallback } from 'react';

/**
 * A hook to recreate the classic React ComponentDidMount() setup
 */
export const useOnMount = (effect: EffectCallback) => {
    useEffect(
        () => {
            effect?.();
        },
        // Intentionally only run on mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );
};
