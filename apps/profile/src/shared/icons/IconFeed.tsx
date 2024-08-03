import type { IconProps } from './domain';

export const IconFeed = (props: IconProps) => {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.7661 5.16082C17.7656 4.64306 17.3456 4.22368 16.8278 4.22412L12.9387 4.22743C12.4209 4.22787 12.0016 4.64796 12.002 5.16572L12.0053 9.05481C12.0057 9.57258 12.4258 9.99195 12.9436 9.99151L16.8327 9.98821C17.3504 9.98777 17.7698 9.56768 17.7694 9.04991L17.7661 5.16082ZM9.05637 12.0088C9.57414 12.0084 9.99422 12.4278 9.99465 12.9456L9.99785 16.8346C9.99828 17.3524 9.57889 17.7725 9.06113 17.7729L5.17204 17.7761C4.65427 17.7766 4.23419 17.3572 4.23377 16.8394L4.23056 12.9503C4.23013 12.4325 4.64952 12.0125 5.16729 12.012L9.05637 12.0088ZM16.8346 12.0023C17.3523 12.0019 17.7724 12.4213 17.7728 12.939L17.776 16.8281C17.7765 17.3459 17.3571 17.766 16.8393 17.7664L12.9502 17.7696C12.4325 17.77 12.0124 17.3506 12.0119 16.8329L12.0087 12.9438C12.0083 12.426 12.4277 12.0059 12.9455 12.0055L16.8346 12.0023ZM9.04961 4.23066C9.56737 4.23022 9.98746 4.64959 9.9879 5.16736L9.99121 9.05645C9.99165 9.57421 9.57227 9.9943 9.0545 9.99474L5.16542 9.99805C4.64765 9.99849 4.22756 9.57911 4.22712 9.06134L4.22382 5.17226C4.22338 4.65449 4.64275 4.2344 5.16052 4.23396L9.04961 4.23066Z"
                fill={color}
            />
        </svg>
    );
};
