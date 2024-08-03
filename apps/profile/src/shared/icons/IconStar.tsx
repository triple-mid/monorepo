import type { IconProps } from './domain';

export const IconStar = (props: IconProps) => {
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
                d="M8.26954 7.52851L3.62364 8.18943L3.54135 8.20586C3.41679 8.23831 3.30323 8.30261 3.21228 8.39221C3.12132 8.4818 3.05623 8.59348 3.02365 8.71583C2.99107 8.83818 2.99217 8.96682 3.02683 9.08862C3.06149 9.21041 3.12848 9.321 3.22095 9.40909L6.58667 12.6237L5.79294 17.1643L5.78347 17.2429C5.77585 17.3693 5.8026 17.4955 5.86099 17.6084C5.91938 17.7213 6.00731 17.817 6.11577 17.8856C6.22424 17.9543 6.34935 17.9934 6.47828 17.999C6.60721 18.0045 6.73534 17.9764 6.84955 17.9174L11.0046 15.7739L15.1503 17.9174L15.2231 17.9503C15.3433 17.9967 15.4739 18.011 15.6016 17.9916C15.7292 17.9721 15.8493 17.9197 15.9495 17.8397C16.0497 17.7597 16.1265 17.655 16.1718 17.5363C16.2172 17.4176 16.2295 17.2893 16.2076 17.1643L15.4131 12.6237L18.7803 9.40838L18.8371 9.34764C18.9183 9.24959 18.9715 9.13219 18.9913 9.00739C19.0111 8.8826 18.9969 8.75487 18.9501 8.63723C18.9032 8.51959 18.8254 8.41624 18.7246 8.3377C18.6238 8.25916 18.5036 8.20825 18.3762 8.19015L13.7303 7.52851L11.6535 3.39867C11.5934 3.27902 11.5003 3.17826 11.3849 3.1078C11.2695 3.03734 11.1362 3 11.0003 3C10.8643 3 10.7311 3.03734 10.6156 3.1078C10.5002 3.17826 10.4072 3.27902 10.3471 3.39867L8.26954 7.52851Z"
                fill={color}
            />
        </svg>
    );
};