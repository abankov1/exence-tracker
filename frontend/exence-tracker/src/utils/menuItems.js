import {dashboard, expenses, transactions, trend} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Виж транзакциите си',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 3,
        title: "Приходи ",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Разходи",
        icon: expenses,
        link: "/dashboard",
    },
]