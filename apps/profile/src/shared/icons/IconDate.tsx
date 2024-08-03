import type { IconProps } from './domain';

export const IconDate = (props: IconProps) => {
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
            <g clipPath="url(#clip0_61_607)">
                <path
                    d="M6.00037 8.25C6.00037 7.85218 6.1584 7.47064 6.43971 7.18934C6.72101 6.90804 7.10254 6.75 7.50037 6.75H16.5004C16.8982 6.75 17.2797 6.90804 17.561 7.18934C17.8423 7.47064 18.0004 7.85218 18.0004 8.25V17.25C18.0004 17.6478 17.8423 18.0294 17.561 18.3107C17.2797 18.592 16.8982 18.75 16.5004 18.75H7.50037C7.10254 18.75 6.72101 18.592 6.43971 18.3107C6.1584 18.0294 6.00037 17.6478 6.00037 17.25V8.25Z"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15.0004 5.25V8.25"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.99963 5.25V8.25"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6.00037 11.25H18.0004"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.99963 14.25H10.4996V15.75H8.99963V14.25Z"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_61_607">
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
