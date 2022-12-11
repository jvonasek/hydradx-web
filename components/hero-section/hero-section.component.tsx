import styled from "styled-components"
import localFont from "@next/font/local"

import { Button } from "../button/button.component"
import Image from "../image/image.component"
import Link from "next/link"

const headerFont = localFont({
	src: [
		{
			path: "../../public/fonts/hubot-sans/WOFF-2/Hubot-Sans-BoldWide.woff2",
			weight: "900",
			style: "bold",
		},
	],
})

const HeroSection = () => {
	const socials = [
		// {
		// 	href: "#",
		// 	icon: {
		// 		src: "/assets/hero-section/socials/substack-desktop.svg",
		// 		alt: "reddit",
		// 	},
		// 	mobileIcon: {
		// 		src: "/assets/socials/reddit.svg",
		// 		alt: "reddit",
		// 	},
		// },
		{
			href: "#",
			icon: {
				src: "/assets/hero-section/socials/substack-desktop.svg",
				alt: "substack",
			},
			mobileIcon: {
				src: "/assets/socials/substack.svg",
				alt: "substack",
			},
		},
		{
			href: "#",
			icon: {
				src: "/assets/hero-section/socials/twitter-desktop-v4.png",
				alt: "twitter",
			},
			mobileIcon: {
				src: "/assets/socials/twitter.svg",
				alt: "twitter",
			},
		},
		{
			href: "#",
			icon: {
				src: "/assets/hero-section/socials/discord-desktop.svg",
				alt: "discord",
			},
			mobileIcon: {
				src: "/assets/socials/discord.svg",
				alt: "discord",
			},
		},

		{
			href: "#",
			icon: {
				src: "/assets/hero-section/socials/telegram-desktop.svg",
				alt: "telegram",
			},
			mobileIcon: {
				src: "/assets/socials/telegram.svg",
				alt: "telegram",
			},
		},
		{
			href: "#",
			icon: {
				src: "/assets/hero-section/socials/github-desktop.svg",
				alt: "github",
			},
			mobileIcon: {
				src: "/assets/socials/github.svg",
				alt: "github",
			},
		},
	]

	return (
		<>
			<Section>
				<OverlayBackground>
					<Image
						src={"/assets/hero-section/bg-ilu-v2.png"}
						alt={"Background ilu"}
						width={"100%"}
						height={"100%"}
						style={{ objectFit: "cover" }}
					/>
				</OverlayBackground>

				<LogoFigure>
					<Image
						src={"/assets/hero-section/hydra-logo.svg"}
						alt={"Hydra logo"}
						width={"100%"}
						height={"100%"}
						style={{ objectFit: "contain" }}
					/>
				</LogoFigure>

				<H1 className={headerFont.className}>
					An Ocean of
					<br /> Liquidity for Polkadot
				</H1>
				<P>
					Trade abundance of assets in a single pool.
					<br /> The HydraDX Omnipool is efficient,
					<br /> sustainable and trustless.
				</P>

				<Button left="auto" right="auto">
					ENTER OMNIPOOL
				</Button>

				<Footer>
					<p>Secured by</p>
					<figure>
						<Image
							src={"/assets/hero-section/polkadot-v2.svg"}
							alt={"polkadot logo"}
							width={"100%"}
							height={"100%"}
						/>
					</figure>
				</Footer>
			</Section>
			<SocialDirectory>
				{socials.map((social, index) => (
					<Link href={social.href} key={index}>
						<SocialFigure>
							<Image
								src={social.icon.src}
								alt={social.icon.alt}
								width={30}
								height={30}
							/>
						</SocialFigure>
					</Link>
				))}
			</SocialDirectory>
			<MobileSocialDirectory>
				{socials.map((social, index) => (
					<Link href={social.href} key={index}>
						<SocialFigure>
							<Image
								src={social.mobileIcon.src}
								alt={social.mobileIcon.alt}
								width={30}
								height={30}
							/>
						</SocialFigure>
					</Link>
				))}
			</MobileSocialDirectory>
		</>
	)
}

export default HeroSection

const Section = styled.section`
	padding: 8.1rem 2rem 13.1rem 2rem;
	position: relative;
	/* border: 1px solid red; */
	margin: -2.5rem -2rem 0 -2rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding: 7.6rem 2rem 2rem 2rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const OverlayBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
`

const LogoFigure = styled.figure`
	width: 5.808rem;
	height: 4.748rem;
	margin: 0 auto 3.4rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			width: 10.263rem;
			height: 8.391rem;
			margin: 0 auto 4.1rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const H1 = styled.h1`
	text-align: center;
	margin-bottom: 2rem;

	font-size: 3.4rem;
	line-height: 130%;

	background: linear-gradient(233.13deg, #ffffff 28.57%, #9bbdff 101.94%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 6rem;
			line-height: 120%;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const P = styled.p`
	text-align: center;
	font-family: "Chakra Petch", sans-serif;
	font-size: 1.6rem;
	line-height: 150%;

	text-align: center;
	color: #ffffff;
	opacity: 0.8;
	margin-bottom: 4.8rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 2.8rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const SocialDirectory = styled.div`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			visibility: visible;
			display: flex;

			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			padding: 1rem 2rem;
			gap: 1.7rem;

			background: linear-gradient(
				180deg,
				rgba(0, 4, 29, 0.63) 0%,
				rgba(0, 4, 29, 0.252) 98.17%
			);
			border: 0.673701px solid rgba(176, 219, 255, 0.2);
			backdrop-filter: blur(2rem);
			border-radius: 8.57262px;

			position: fixed;
			bottom: 2.6rem;
			right: 2.6rem;
			z-index: 99;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const MobileSocialDirectory = styled.div`
	display: flex;
	justify-content: center;
	gap: 3.877rem;
	flex-wrap: wrap;
	margin-top: 2.1rem;
	/* margin-bottom: 5.9rem; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: none;
			visibility: hidden;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const SocialFigure = styled.figure`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Footer = styled.div`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			visibility: visible;
			margin-top: 8.6rem;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.83rem;

			font-family: "Chakra Petch";
			font-style: normal;
			font-weight: 500;
			font-size: 1.44553rem;
			line-height: 150%;

			color: #fff3f3;

			figure {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`
