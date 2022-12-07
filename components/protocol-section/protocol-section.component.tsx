import styled from "styled-components"
import localFont from "@next/font/local"

import H2 from "../h2/content-h2.component"
// import { Button } from "../button/button.component"
import Image from "../image/image.component"

const headerFont = localFont({
	src: [
		{
			path: "../../public/fonts/hubot-sans/WOFF-2/Hubot-Sans-Medium.woff2",
			weight: "550",
			style: "normal",
		},
	],
})

const ProtocolSection = () => {
	return (
		<Section>
			<H2 variant="RED">
				Hydra<sup>dx</sup> <span>protocol</span>
			</H2>

			<Article1>
				<OverlayBackground />
				<DragonFigure>
					<Image
						src="/assets/protocol-section/first-ilu-dragon.png"
						alt="dragon ilu"
						width={"100%"}
						height={"100%"}
					/>
				</DragonFigure>
				<TowerFigure>
					<Image
						src="/assets/protocol-section/first-ilu-tower.png"
						alt="tower ilu"
						width={"100%"}
						height={"100%"}
					/>
				</TowerFigure>
				<ContentContainer>
					<H3 className={headerFont.className}>
						Embrace sustainable
						<br /> protocol design.
					</H3>
					<P>
						HydraDX is designed and built to last.
						<br /> Offering a value proposition for everyone: Traders, LPs and
						HDX hodlers.
					</P>
					<Button>Learn more</Button>
				</ContentContainer>
			</Article1>

			<Article2>
				<OverlayBackground />

				<ContentContainer>
					<H3 className={headerFont.className}>
						Take a Glimpse Into the Future.
					</H3>
					<P>
						Backed by an extensive body of research. Stableswap, order matching,
						bonds and liquidation mechanisms - we are just getting started.
					</P>
					<Button>Learn more</Button>
				</ContentContainer>

				<EyeFigure>
					<Image
						src="/assets/protocol-section/second-ilu-eye.png"
						alt="eye ilu"
						width={"100%"}
						height={"100%"}
						style={{
							objectFit: "cover",
						}}
					/>
				</EyeFigure>
			</Article2>

			<Article3>
				<OverlayBackground />

				<CoinFigure>
					<Image
						src="/assets/protocol-section/third-ilu-coin.png"
						alt="coin ilu"
						width={"100%"}
						height={"100%"}
						style={{
							objectFit: "cover",
						}}
					/>
				</CoinFigure>

				<ContentContainer>
					<H3 className={headerFont.className}>
						Decentralized and Community-first.
					</H3>
					<P>
						HydraDX is a decentralized protocol with a community-first approach.
						All decisions affecting the protocol are adopted in a democratic
						process.
					</P>
					<Button>Learn more</Button>
				</ContentContainer>
			</Article3>
		</Section>
	)
}

export default ProtocolSection

const Section = styled.section`
	max-width: 110rem;
	margin: 0 auto;
`

const H3 = styled.h3`
	font-size: 4.2rem;
	line-height: 130%;

	text-transform: capitalize;

	color: #ffffff;
	font-stretch: 125;

	text-shadow: 3px 3px 0px rgba(11, 2, 5, 0.66);

	margin-bottom: 1.6rem;
`

const P = styled.p`
	font-family: "Chakra Petch";
	font-style: normal;
	font-weight: 400;
	font-size: 1.8rem;
	line-height: 150%;

	color: #ffffff;

	opacity: 0.8;

	margin-bottom: 4rem;
`

const TowerFigure = styled.figure`
	position: relative;
	max-width: 86.933rem;
	margin: 0 auto;
`

const DragonFigure = styled.figure`
	position: absolute;
	top: -12rem;
	left: 50%;
	z-index: 1;
	transform: translateX(-50%);
	/* max-width: 86.933rem;
	margin: 0 auto; */
`

const OverlayBackground = styled.div`
	position: absolute;
`

const ContentContainer = styled.div`
	position: relative;
	z-index: 1;
`

const EyeFigure = styled.figure`
	/* height: 100%; */
	max-width: 60.1rem;
`

const CoinFigure = styled.figure`
	/* height: 100%; */
	max-width: 60.1rem;
`

const Button = styled.button`
	cursor: pointer;
	background: transparent;
	display: block;

	border: 1px solid #ffffff;
	border-radius: 0.4rem;
	padding: 12px 40px;
	/* padding: 1.234rem 3.29rem; */
	/* width: 100%; */
	text-align: start;
	font-family: "Chakra Petch";
	font-style: normal;
	font-weight: 700;
	font-size: 1.4rem;
	line-height: 150%;

	letter-spacing: 0.105em;
	text-align: center;
	text-transform: uppercase;

	color: #ffffff;
`

const Article1 = styled.article`
	margin-top: 8.6rem;
	position: relative;
	/* border: 1px solid red; */
	border-radius: 0.8rem;
	background-color: #040713;

	padding: 0 2rem 5.6rem;
	margin-bottom: 2.3rem;

	${H3} {
		text-align: center;
	}

	${P} {
		text-align: center;
	}

	${Button} {
		margin: 0 auto;

		background: rgba(255, 3, 103, 0.27);

		border: 1px solid #fc408c;
	}

	${OverlayBackground} {
		top: 0;
		left: 0;
		width: 100%;
		height: 50%;
		/* z-index: -1; */

		background: linear-gradient(180deg, #f6297c 0%, #040713 100%);
		border-radius: 8px 8px 0px 0px;
	}

	&:before {
		content: "";
		position: absolute;
		z-index: -2;
		top: -1px;
		left: -1px;
		right: -1px;
		bottom: -1px;
		border-radius: 0.8rem;

		/* background: linear-gradient(180deg, #85d1ff 58.16%, #040713 100%); */
		background: linear-gradient(
			0deg,
			#f6297c 1.09%,
			rgba(246, 41, 124, 0.08) 55.98%
		);
	}
`
const Article2 = styled.article`
	position: relative;
	border: 1px solid #b733cd;
	border-radius: 0.8rem;
	overflow: hidden;

	display: grid;
	gap: 5.3rem;

	grid-template-columns: 1fr auto;
	margin-bottom: 2.3rem;

	${Button} {
		/* margin: 0 auto; */

		background: rgba(163, 62, 235, 0.2);
		border: 1px solid #ac41ef;
	}

	${ContentContainer} {
		align-self: center;
		margin-left: 4.289rem;
	}

	${OverlayBackground} {
		top: -10rem;
		left: -40rem;
		right: -20rem;
		/* width: 70%; */
		bottom: -10rem;

		z-index: -1;

		background: radial-gradient(
			29.7% 54.39% at 73.98% 50.89%,
			rgba(181, 51, 226, 0.83) 0%,
			rgba(203, 52, 227, 0) 100%
		);
		/* border: 1px solid green; */
	}
`
const Article3 = styled.article`
	position: relative;
	border: 1px solid #7a43f0;
	overflow: hidden;
	border-radius: 0.8rem;

	display: grid;
	gap: 5.3rem;

	grid-template-columns: auto 1fr;
	margin-bottom: 13.4rem;

	${Button} {
		/* margin: 0 auto; */

		background: rgba(97, 62, 235, 0.2);
		border: 1px solid #7941ef;
	}

	${ContentContainer} {
		align-self: center;
		margin-right: 4.289rem;
	}

	${OverlayBackground} {
		top: 0rem;
		left: 0rem;
		right: -15rem;
		/* width: 70%; */
		bottom: 0rem;

		z-index: -1;

		background: linear-gradient(
			90deg,
			rgba(140, 52, 227, 0) 40.73%,
			rgba(139, 51, 226, 0.83) 97.75%
		);
		transform: matrix(-1, 0, 0, 1, 0, 0);
	}
`
