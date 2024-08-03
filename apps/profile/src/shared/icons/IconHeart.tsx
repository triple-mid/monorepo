import type { IconProps } from './domain';

export const IconHeart = (props: IconProps) => {
    const { color = '#2B2A29' } = props;

    return (
        // biome-ignore lint/a11y/noSvgWithoutTitle: FIXME
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13.875 4C12.57 4 11.3175 4.6075 10.5 5.56C9.6825 4.6075 8.43 4 7.125 4C4.815 4 3 5.8075 3 8.125C3 10.9525 5.55 13.27 9.4125 16.7725L10.5 17.7625L11.5875 16.7725C15.45 13.27 18 10.9525 18 8.125C18 5.8075 16.185 4 13.875 4Z"
                fill={color}
            />
        </svg>
    );
};
