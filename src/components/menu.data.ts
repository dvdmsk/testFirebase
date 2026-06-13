import { PAGES } from "@/config/pages.config"

export interface IMenuItem {
    href: string
    text: string
}

export const MENU_ITEMS: IMenuItem[] = [
    { href: PAGES.HOME, text: 'Home' },
    { href: PAGES.EXPLORE, text: 'Explore' },
    { href: PAGES.PROFILE_FAKE, text: 'Profile Fake' }
]