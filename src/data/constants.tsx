import { IconClock, IconHome, IconPopular, IconTopic } from "@/app/modules/common/icons";

export const SideBarNavigationMainData = [
    {
        title: 'Trang chủ',
        link: "/",
        icon: <IconHome size={22} />
    },
    {
        title: 'Phổ biến',
        link: "/",
        icon: <IconPopular size={22} />
    },
    {
        title: 'Lịch sử',
        link: "/",
        icon: <IconClock size={22} />
    },
    {
        title: 'Chủ đề',
        link: "/tags",
        icon: <IconTopic size={22} />
    },
];

export const SideBarAdminLayoutData = [
    {
        title: "Quản lí",
        children: [
            {
                pathname: "/admin/list/user",
                title: 'Danh sách người dùng',
                link: "/admin/list/user",
                icon: <IconHome size={22} />
            },
            {
                pathname: "/admin/list/blog",
                title: 'Danh sách bài viết',
                link: "/admin/list/blog",
                icon: <IconHome size={22} />
            },
        ]
    }
];