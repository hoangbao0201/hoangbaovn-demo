export type IconProps = {
    color?: string;
    size?: string | number;
} & React.SVGAttributes<SVGElement>;

export const IconPen: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width={size}
                height={size}
                {...attributes}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path>
            </svg>
        </>
    );
};

export const IconBell: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width={size}
                height={size}
                {...attributes}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path>
            </svg>
        </>
    );
};

export const IconHome: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                aria-hidden="true"
                width={size}
                height={size}
                {...attributes}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"></path>
            </svg>
        </>
    );
};

export const IconCrawn: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg
                version="1.1"
                width={size}
                height={size}
                {...attributes}
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M202.5984 392.3456l266.4448-275.5072c24.2688-25.088 64.3584-25.344 88.9344-0.6656l280.8832 282.1632-324.1472 306.0736-312.1152-312.064z"
                        fill="#FFAC48"
                    ></path>
                    <path
                        d="M764.5184 323.1232l-290.9696 284.2112 44.4416 45.2096 292.5056-285.696z"
                        fill="#FC992D"
                    ></path>
                    <path
                        d="M332.2368 273.664c-3.84 0-7.68-1.4336-10.6496-4.3008a15.36 15.36 0 0 1-0.3584-21.7088l7.5264-7.7824a15.36 15.36 0 0 1 21.7088-0.3584 15.36 15.36 0 0 1 0.3584 21.7088l-7.5264 7.7824c-3.0208 3.072-7.0144 4.6592-11.0592 4.6592z"
                        fill="#333333"
                    ></path>
                    <path
                        d="M514.7136 719.7696c-3.9424 0-7.8848-1.4848-10.8544-4.5056L191.744 403.2a15.4112 15.4112 0 0 1-0.2048-21.5552l97.792-101.12a15.36 15.36 0 0 1 21.7088-0.3584 15.36 15.36 0 0 1 0.3584 21.7088L224.1536 392.1408l290.8672 290.8672 301.824-284.9792-269.7216-271.0016a46.9504 46.9504 0 0 0-33.5872-13.824c-12.6976 0.1024-24.576 5.1712-33.4336 14.2848L391.3728 219.2384a15.36 15.36 0 0 1-21.7088 0.3584 15.36 15.36 0 0 1-0.3584-21.7088l88.7296-91.7504c14.592-15.104 34.2528-23.5008 55.2448-23.6544 21.1968-0.256 40.7552 7.9872 55.6032 22.8864l280.8832 282.1632c2.9184 2.9184 4.5568 6.912 4.4544 11.0592-0.0512 4.1472-1.792 8.0896-4.8128 10.9056l-324.1472 306.0736c-2.9696 2.816-6.7584 4.1984-10.5472 4.1984z"
                        fill="#333333"
                    ></path>
                    <path
                        d="M897.0752 276.4288l-351.4368 354.9696a38.38464 38.38464 0 0 1-54.0672 0.512L142.6944 293.0688c-17.1008 0.9216-32.6656 8.3456-29.696 33.4848 6.1952 52.5824 40.1408 391.8336 41.2672 407.6544 0.8704 12.032 2.7648 33.792 25.856 49.7664h701.8496c19.8144 0 36.352-15.0528 38.2464-34.7648l42.3936-442.112c3.4816-35.9424-40.1408-56.3712-65.536-30.6688z"
                        fill="#F2C336"
                    ></path>
                    <path
                        d="M911.8208 263.5776l-6.8096 6.0416-45.2608 450.4576a39.45984 39.45984 0 0 1-12.2368 24.7296l-33.6896 31.3856h93.4912l46.7456-499.8144-42.24-12.8z"
                        fill="#E8A200"
                    ></path>
                    <path
                        d="M518.3488 658.0736c-13.5168 0-27.0848-5.0176-37.4784-15.1552l-366.3872-355.84c-8.5504-8.2944-19.0976-7.6288-26.1632-4.1984-7.0144 3.4304-14.08 11.3152-12.8512 23.1424l14.5408 137.2672a15.36 15.36 0 0 1-13.6704 16.896c-8.448 0.9216-15.9744-5.2224-16.896-13.6704L44.9536 309.248c-2.4064-22.784 9.3696-43.9808 29.952-54.016 20.6336-10.0352 44.544-6.1952 60.9792 9.7792l366.336 355.8912c9.0112 8.7552 23.6032 8.6528 32.4608-0.3072l79.0528-79.8208a15.3088 15.3088 0 0 1 21.7088-0.1024 15.3088 15.3088 0 0 1 0.1024 21.7088l-79.0528 79.8208c-10.3936 10.5472-24.2688 15.872-38.144 15.872zM677.8368 513.2288c-3.8912 0-7.8336-1.4848-10.8032-4.4544a15.3088 15.3088 0 0 1-0.1024-21.7088l11.4176-11.52a15.3088 15.3088 0 0 1 21.7088-0.1024 15.3088 15.3088 0 0 1 0.1024 21.7088l-11.4176 11.52c-2.9696 3.0208-6.9632 4.5568-10.9056 4.5568z"
                        fill="#333333"
                    ></path>
                    <path
                        d="M963.2768 404.3264l-84.2752 78.1312a36.77184 36.77184 0 0 0 0.0512 53.9648l65.7408 60.672 18.4832-192.768zM184.0128 481.1264L123.0336 424.6016l16.4352 165.2736 44.4928-41.0624c19.712-18.2272 19.712-49.408 0.0512-67.6864z"
                        fill="#F58200"
                    ></path>
                    <path
                        d="M878.6432 536.0128l0.4608 0.4608 55.6544 51.3536 22.4256-177.8176-73.5744 68.1984-4.9664 57.8048z"
                        fill="#F46800"
                    ></path>
                    <path
                        d="M837.7856 901.9392H246.9376c-33.0752 0-59.904-26.8288-59.904-59.904 0-33.0752 26.8288-59.904 59.904-59.904h590.848c33.0752 0 59.904 26.8288 59.904 59.904 0 33.0752-26.8288 59.904-59.904 59.904z"
                        fill="#F58200"
                    ></path>
                    <path
                        d="M812.7488 788.992s32.0512 21.0944 32.0512 50.5344c0 29.3888-9.0624 52.0192-75.776 52.3776h98.3552c8.6528 0 29.3888-25.2416 29.3888-52.7872s-9.728-49.7152-84.0192-50.1248z"
                        fill="#F46800"
                    ></path>
                    <path
                        d="M389.8368 381.78816l120.8064-120.81152 120.81152 120.81152-120.81152 120.81152z"
                        fill="#8F93FB"
                    ></path>
                    <path
                        d="M508.2112 277.504l50.8928 106.7008-55.808 108.1856 128.9216-114.5856z"
                        fill="#787CF5"
                    ></path>
                    <path
                        d="M510.6688 517.9392c-4.096 0-7.9872-1.6384-10.8544-4.5056l-120.7808-120.832a15.36 15.36 0 0 1 0-21.7088l120.7808-120.832c5.7856-5.7856 15.9744-5.7856 21.7088 0l120.832 120.832c2.8672 2.8672 4.5056 6.8096 4.5056 10.8544s-1.6384 7.9872-4.5056 10.8544l-120.832 120.832c-2.8672 2.8672-6.8096 4.5056-10.8544 4.5056z m-99.072-136.192l99.072 99.072 99.072-99.072-99.072-99.072-99.072 99.072z"
                        fill="#333333"
                    ></path>
                    <path
                        d="M947.2 254.72c-20.8896-9.7792-44.8-5.4784-61.0304 10.8544L708.1472 445.44a15.3088 15.3088 0 0 0 0.1024 21.7088 15.3088 15.3088 0 0 0 21.7088-0.1024l178.0224-179.8144c8.448-8.5504 19.0464-7.9872 26.1632-4.6592 7.1168 3.328 14.336 11.1616 13.1584 23.0912l-6.7072 69.7344-101.3248 93.952c-12.4928 11.6224-19.6608 28.0576-19.6608 45.1072s7.2192 33.4848 19.7632 45.056l76.8 70.8608-11.264 117.3504a22.94784 22.94784 0 0 1-22.9376 20.8384h-28.0576c-5.2224-1.1264-10.5984-1.792-16.128-1.792H194.6624c-5.5296 0-10.9568 0.6656-16.128 1.792h-33.28c-11.8272 0-21.7088-8.8576-22.9376-20.6336l-12.8-121.088 73.0112-67.3792c12.544-11.5712 19.7632-28.0064 19.7632-45.056s-7.168-33.536-19.6608-45.1072L78.848 373.0432a15.37024 15.37024 0 0 0-21.7088 0.8192 15.37024 15.37024 0 0 0 0.8192 21.7088l103.7824 96.256c6.3488 5.888 9.8304 13.8752 9.8304 22.5792s-3.5328 16.64-9.8816 22.528L105.4208 588.8l-2.4576-23.04a15.29856 15.29856 0 0 0-16.896-13.6704 15.36 15.36 0 0 0-13.6704 16.896l19.3024 182.1696c2.5088 23.5008 19.7632 42.0352 42.0352 46.848-8.96 12.3904-14.336 27.5456-14.336 43.9808 0 41.472 33.7408 75.264 75.264 75.264h133.2224c8.4992 0 15.36-6.8608 15.36-15.36s-6.8608-15.36-15.36-15.36H194.6624c-24.5248 0-44.544-19.968-44.544-44.544 0-20.224 13.6192-37.376 32.1536-42.752h667.904c18.5344 5.376 32.1536 22.4768 32.1536 42.752 0 24.5248-19.968 44.544-44.544 44.544H401.3568c-8.4992 0-15.36 6.8608-15.36 15.36s6.8608 15.36 15.36 15.36h436.4288c41.472 0 75.264-33.7408 75.264-75.264 0-16.9472-5.6832-32.512-15.1552-45.1072 20.3264-6.1952 35.5328-24.0128 37.6832-46.2848L977.92 308.5824c2.2016-22.9376-9.8816-44.0832-30.72-53.8624z m-96.8192 259.6864c0-8.6528 3.4816-16.6912 9.8304-22.5792l76.032-70.5024-16.384 170.5984-59.5968-55.04a30.2336 30.2336 0 0 1-9.8816-22.4768z"
                        fill="#333333"
                    ></path>
                    <path
                        d="M84.1728 534.0672a15.36 15.36 0 0 0 13.6704-16.896l-1.7408-16.384c-0.8704-8.448-8.4992-14.5408-16.896-13.6704a15.36 15.36 0 0 0-13.6704 16.896l1.7408 16.384a15.31392 15.31392 0 0 0 15.2576 13.7216c0.5632 0.0512 1.1264 0 1.6384-0.0512z"
                        fill="#333333"
                    ></path>
                    <path
                        d="M352.1536 337.0496c-3.072 0-6.1952-1.1264-8.6016-3.328a12.78976 12.78976 0 0 1-0.8192-18.0736l11.776-12.9024a12.78976 12.78976 0 1 1 18.8928 17.2544l-11.776 12.9024c-2.56 2.7648-5.9904 4.1472-9.472 4.1472zM396.4416 288.8192c-3.072 0-6.144-1.0752-8.6016-3.328a12.79488 12.79488 0 0 1-0.8704-18.0736L448.9728 199.168a12.79488 12.79488 0 1 1 18.944 17.2032L405.9136 284.6208c-2.5088 2.7648-5.9904 4.1984-9.472 4.1984zM461.8752 385.1264a12.79488 12.79488 0 0 1-9.0624-21.8624l25.7024-25.7024c5.0176-5.0176 13.1072-5.0176 18.1248 0s5.0176 13.1072 0 18.1248l-25.7024 25.7024c-2.56 2.4576-5.8368 3.7376-9.0624 3.7376zM198.912 701.184a12.8 12.8 0 0 1-12.6976-11.4688l-8.0896-77.9776a12.8512 12.8512 0 0 1 11.4176-14.08c7.0656-0.768 13.312 4.4032 14.08 11.4176l8.0896 77.9776a12.8512 12.8512 0 0 1-11.4176 14.08c-0.4608 0-0.9216 0.0512-1.3824 0.0512zM422.1952 854.3744h-27.6992a12.8 12.8 0 0 1 0-25.6h27.6992a12.8 12.8 0 0 1 0 25.6z"
                        fill="#FFFFFF"
                    ></path>
                    <path
                        d="M343.6544 854.3744H253.7984a12.8 12.8 0 0 1 0-25.6h89.9072c7.0656 0 12.8 5.7344 12.8 12.8s-5.7344 12.8-12.8512 12.8z"
                        fill="#FFFFFF"
                    ></path>
                </g>
            </svg>
        </>
    );
};

export const IconRank1: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32">
                <defs>
                    <path
                        d="M23.262 11.055a1.362 1.362 0 00-.154-1.459l-.802-1.005a1.36 1.36 0 01-.296-.911l.058-1.285a1.36 1.36 0 00-.733-1.27l-1.142-.592a1.362 1.362 0 01-.641-.712l-.47-1.197a1.361 1.361 0 00-1.186-.863l-1.284-.076a1.36 1.36 0 01-.875-.39L14.82.392a1.36 1.36 0 00-1.435-.305L12.182.54c-.309.116-.65.116-.958 0L10.02.087a1.36 1.36 0 00-1.435.305l-.916.903c-.235.232-.546.37-.875.39L5.51 1.76c-.53.032-.993.368-1.187.863L3.854 3.82a1.36 1.36 0 01-.641.712l-1.142.592c-.471.244-.758.74-.734 1.27l.059 1.285c.015.33-.09.653-.296.911L.297 9.596a1.362 1.362 0 00-.153 1.46l.576 1.15c.148.294.183.633.1.952l-.324 1.245a1.362 1.362 0 00.453 1.395l.994.816c.255.21.425.505.48.83l.21 1.269c.086.524.47.95.98 1.09l1.24.342c.319.087.594.287.776.563l.708 1.074a1.36 1.36 0 001.34.596l1.272-.192c.326-.05.659.022.937.2l1.083.692c.447.286 1.02.286 1.467 0l1.084-.693c.278-.177.61-.248.937-.199l1.272.192a1.362 1.362 0 001.34-.596l.708-1.074c.181-.276.457-.476.775-.563l1.24-.342a1.36 1.36 0 00.982-1.09l.21-1.269a1.36 1.36 0 01.479-.83l.994-.816a1.36 1.36 0 00.453-1.395l-.324-1.245a1.36 1.36 0 01.1-.953l.576-1.15z"
                        id="a"
                    ></path>
                </defs>
                <g fill="none" fillRule="evenodd">
                    <path
                        d="M4.494 16.938V31.22c0 .105.146.158.232.084l6.445-5.643 6.444 5.643c.086.074.233.021.233-.084V16.938H4.494z"
                        fill="#FF2D55"
                    ></path>
                    <mask id="b" fill="#fff">
                        <use href="#a"></use>
                    </mask>
                    <use fill="#FFC400" href="#a"></use>
                    <path
                        fill="#FFF"
                        opacity=".4"
                        mask="url(#b)"
                        transform="rotate(-42 23 2.5)"
                        d="M9-11h28v27H9z"
                    ></path>
                    <text fontSize="15" fontWeight="500" fill="#333">
                        <tspan x="8" y="18">
                            1
                        </tspan>
                    </text>
                </g>
            </svg>
        </>
    );
};

export const IconRank2: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32">
                <defs>
                    <path
                        d="M23.262 11.055a1.362 1.362 0 00-.154-1.459l-.802-1.005a1.36 1.36 0 01-.296-.911l.058-1.285a1.36 1.36 0 00-.733-1.27l-1.142-.592a1.362 1.362 0 01-.641-.712l-.47-1.197a1.361 1.361 0 00-1.186-.863l-1.284-.076a1.36 1.36 0 01-.875-.39L14.82.392a1.36 1.36 0 00-1.435-.305L12.182.54c-.309.116-.65.116-.958 0L10.02.087a1.36 1.36 0 00-1.435.305l-.916.903c-.235.232-.546.37-.875.39L5.51 1.76c-.53.032-.993.368-1.187.863L3.854 3.82a1.36 1.36 0 01-.641.712l-1.142.592c-.471.244-.758.74-.734 1.27l.059 1.285c.015.33-.09.653-.296.911L.297 9.596a1.362 1.362 0 00-.153 1.46l.576 1.15c.148.294.183.633.1.952l-.324 1.245a1.362 1.362 0 00.453 1.395l.994.816c.255.21.425.505.48.83l.21 1.269c.086.524.47.95.98 1.09l1.24.342c.319.087.594.287.776.563l.708 1.074a1.36 1.36 0 001.34.596l1.272-.192c.326-.05.659.022.937.2l1.083.692c.447.286 1.02.286 1.467 0l1.084-.693c.278-.177.61-.248.937-.199l1.272.192a1.362 1.362 0 001.34-.596l.708-1.074c.181-.276.457-.476.775-.563l1.24-.342a1.36 1.36 0 00.982-1.09l.21-1.269a1.36 1.36 0 01.479-.83l.994-.816a1.36 1.36 0 00.453-1.395l-.324-1.245a1.36 1.36 0 01.1-.953l.576-1.15z"
                        id="a"
                    ></path>
                </defs>
                <g fill="none" fillRule="evenodd">
                    <path
                        d="M4.494 16.938V31.22c0 .105.146.158.232.084l6.445-5.643 6.444 5.643c.086.074.233.021.233-.084V16.938H4.494z"
                        fill="#009FE0"
                    ></path>
                    <mask id="b" fill="#fff">
                        <use href="#a"></use>
                    </mask>
                    <use fill="#DBDBDB" href="#a"></use>
                    <path
                        fill="#FFF"
                        opacity=".4"
                        mask="url(#b)"
                        transform="rotate(-42 23.437 3.4)"
                        d="M9.437-10.1h28v27h-28z"
                    ></path>
                    <text
                        mask="url(#b)"
                        fontSize="15"
                        fontWeight="500"
                        fill="#333"
                    >
                        <tspan x="8" y="18">
                            2
                        </tspan>
                    </text>
                </g>
            </svg>
        </>
    );
};

export const IconRank3: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32">
                <defs>
                    <path
                        d="M23.262 11.055a1.362 1.362 0 00-.154-1.459l-.802-1.005a1.36 1.36 0 01-.296-.911l.058-1.285a1.36 1.36 0 00-.733-1.27l-1.142-.592a1.362 1.362 0 01-.641-.712l-.47-1.197a1.361 1.361 0 00-1.186-.863l-1.284-.076a1.36 1.36 0 01-.875-.39L14.82.392a1.36 1.36 0 00-1.435-.305L12.182.54c-.309.116-.65.116-.958 0L10.02.087a1.36 1.36 0 00-1.435.305l-.916.903c-.235.232-.546.37-.875.39L5.51 1.76c-.53.032-.993.368-1.187.863L3.854 3.82a1.36 1.36 0 01-.641.712l-1.142.592c-.471.244-.758.74-.734 1.27l.059 1.285c.015.33-.09.653-.296.911L.297 9.596a1.362 1.362 0 00-.153 1.46l.576 1.15c.148.294.183.633.1.952l-.324 1.245a1.362 1.362 0 00.453 1.395l.994.816c.255.21.425.505.48.83l.21 1.269c.086.524.47.95.98 1.09l1.24.342c.319.087.594.287.776.563l.708 1.074a1.36 1.36 0 001.34.596l1.272-.192c.326-.05.659.022.937.2l1.083.692c.447.286 1.02.286 1.467 0l1.084-.693c.278-.177.61-.248.937-.199l1.272.192a1.362 1.362 0 001.34-.596l.708-1.074c.181-.276.457-.476.775-.563l1.24-.342a1.36 1.36 0 00.982-1.09l.21-1.269a1.36 1.36 0 01.479-.83l.994-.816a1.36 1.36 0 00.453-1.395l-.324-1.245a1.36 1.36 0 01.1-.953l.576-1.15z"
                        id="a"
                    ></path>
                </defs>
                <g fill="none" fillRule="evenodd">
                    <path
                        d="M4.494 16.938V31.22c0 .105.146.158.232.084l6.445-5.643 6.444 5.643c.086.074.233.021.233-.084V16.938H4.494z"
                        fill="#36B37E"
                    ></path>
                    <mask id="b" fill="#fff">
                        <use href="#a"></use>
                    </mask>
                    <use fill="#F5A250" href="#a"></use>
                    <path
                        fill="#FFF"
                        opacity=".25"
                        mask="url(#b)"
                        transform="rotate(-42 23.437 1.4)"
                        d="M9.437-12.1h28v27h-28z"
                    ></path>
                    <text
                        mask="url(#b)"
                        fontSize="15"
                        fontWeight="500"
                        fill="#333"
                    >
                        <tspan x="8" y="18">
                            3
                        </tspan>
                    </text>
                </g>
            </svg>
        </>
    );
};

export const IconPopular: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width={size}
                height={size}
                {...attributes}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="m10 10.414 4 4 5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4-7.707 7.707 1.414 1.414z"></path>
            </svg>
        </>
    );
};

export const IconClock: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width={size}
                height={size}
                {...attributes}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                <path d="M13 7h-2v6h6v-2h-4z"></path>
            </svg>
        </>
    );
};

export const IconTopic: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width={size}
                height={size}
                {...attributes}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M11.707 2.293A.997.997 0 0 0 11 2H6a.997.997 0 0 0-.707.293l-3 3A.996.996 0 0 0 2 6v5c0 .266.105.52.293.707l10 10a.997.997 0 0 0 1.414 0l8-8a.999.999 0 0 0 0-1.414l-10-10zM13 19.586l-9-9V6.414L6.414 4h4.172l9 9L13 19.586z"></path>
                <circle cx="8.353" cy="8.353" r="1.647"></circle>
            </svg>
        </>
    );
};

export const IconShare: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width={size}
                height={size}
                {...attributes}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path>
            </svg>
        </>
    );
};

export const IconSearch: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width={size}
                height={size}
                {...attributes}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            </svg>
        </>
    );
};

export const IconHear: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg
                aria-label="Thích"
                fill="currentColor"
                role="img"
                width={size}
                height={size}
                {...attributes}
                viewBox="0 0 24 24"
            >
                <title>Thích</title>
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
            </svg>
        </>
    );
};

export const IconComment: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg
                aria-label="Bình luận"
                fill="currentColor"
                role="img"
                width={size}
                height={size}
                {...attributes}
                viewBox="0 0 24 24"
            >
                <title>Bình luận</title>
                <path
                    d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                ></path>
            </svg>
        </>
    );
};

export const IconSave: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="img"
                width={size}
                height={size}
                {...attributes}
                aria-hidden="true"
            >
                <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
            </svg>
        </>
    );
};

export const Icon: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return <></>;
};
