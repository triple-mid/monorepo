import type { IconProps } from './domain';

export const IconEdit = (props: IconProps) => {
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
                d="M14.1138 5.55557L16.4455 7.88892M8.67319 7.16545C7.30976 7.35985 6.07074 8.06445 5.20605 9.13712C4.34137 10.2098 3.91536 11.5707 4.01397 12.9453C4.11259 14.32 4.72847 15.6061 5.73741 16.5441C6.74634 17.4822 8.07323 18.0025 9.45042 18C10.7588 18.0001 12.0234 17.5284 13.0125 16.6714C14.0016 15.8143 14.6489 14.6292 14.8358 13.3333M11.0048 13.3335L17.5219 6.78844C17.828 6.48211 18 6.06664 18 5.63343C18 5.20022 17.828 4.78475 17.5219 4.47842C17.2158 4.17209 16.8006 4 16.3677 4C15.9348 4 15.5197 4.17209 15.2135 4.47842L8.67315 11.0001V13.3335H11.0048Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
