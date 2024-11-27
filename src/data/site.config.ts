interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number

}

export const siteConfig: SiteConfig = {
	site: 'https://blog-template-gray.vercel.app/', 
	author: 'Digiimpact', 
	title: 'Digiimpact blogs', 
	description: 'How to improve your website SEO with quality backlinks',
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Website design and development ', 
	paginationSize: 6 
}
