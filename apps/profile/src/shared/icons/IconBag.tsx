import type { IconProps } from './domain';

export const IconStar = (props: IconProps) => {
    const { color = '#2B2A29' } = props;

    return (
        // biome-ignore lint/a11y/noSvgWithoutTitle: FIXME
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_61_588)">
                <path
                    d="M5.25 9.75C5.25 9.35218 5.40804 8.97064 5.68934 8.68934C5.97064 8.40804 6.35218 8.25 6.75 8.25H17.25C17.6478 8.25 18.0294 8.40804 18.3107 8.68934C18.592 8.97064 18.75 9.35218 18.75 9.75V16.5C18.75 16.8978 18.592 17.2794 18.3107 17.5607C18.0294 17.842 17.6478 18 17.25 18H6.75C6.35218 18 5.97064 17.842 5.68934 17.5607C5.40804 17.2794 5.25 16.8978 5.25 16.5V9.75Z"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.99963 8.25V6.75C8.99963 6.35218 9.15767 5.97064 9.43897 5.68934C9.72028 5.40804 10.1018 5.25 10.4996 5.25H13.4996C13.8975 5.25 14.279 5.40804 14.5603 5.68934C14.8416 5.97064 14.9996 6.35218 14.9996 6.75V8.25"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 12V12.0067"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M5.25 12.75C7.34369 13.805 9.65552 14.3546 12 14.3546C14.3445 14.3546 16.6563 13.805 18.75 12.75"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_61_588">
                    <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(3 3)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};
