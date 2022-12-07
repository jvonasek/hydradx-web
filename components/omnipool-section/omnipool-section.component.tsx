import styled from "styled-components"

import { Button } from "../button/button.component"
import H2 from "../h2/content-h2.component"
import H3 from "../content-h3/content-h3.component"
import P from "../content-p/content-p.component"
import GridContainer from "../grid-container/grid-container.component"
import Image from "../image/image.component"

const OmnipoolSection = () => {
	return (
		<Section>
			<H2 variant="LIGHTBLUE">
				Hydra<sup>dx</sup> <span>omnipool</span>
			</H2>

			<GridContainer>
				<ContentFigure>
					<FirstIlu>
						<Image
							src="/assets/omnipool/first-ilu.png"
							alt="first ilu"
							width={"100%"}
							height={"100%"}
							style={{
								objectFit: "contain",
							}}
						/>
					</FirstIlu>
				</ContentFigure>
				<Content>
					<H3>Meet single-sided liquidity provisioning.</H3>
					<P>
						Provide liquidity only for the asset you want. The Omnipool will
						mint and burn a corresponding amount of the pool token LRNA.
					</P>

					<Button>LEARN MORE</Button>
				</Content>
			</GridContainer>

			<GridContainer>
				<Content>
					<H3>Dive into deeper liquidity with efficiency gains.</H3>
					<P>
						By combining all assets into a single trading pool, the HydraDX
						brings unparalleled efficiencies to AMMs.
					</P>

					<Button>LEARN MORE</Button>
				</Content>
				<ContentFigure>
					<SecondIlu>
						<Image
							src="/assets/omnipool/second-ilu.png"
							alt="second ilu"
							width={"100%"}
							height={"100%"}
							style={{
								objectFit: "contain",
							}}
						/>
					</SecondIlu>
				</ContentFigure>
			</GridContainer>

			<GridContainer>
				<Content>
					<H3>Experience less impermanent loss.</H3>
					<P>
						Liquidity Providers are supported by several non-inflationary
						mechanisms for mitigating impermanent loss.
					</P>

					<Button>LEARN MORE</Button>
				</Content>
				<ContentFigure>
					<ThirdIlu>
						<Image
							src="/assets/omnipool/third-ilu.png"
							alt="third ilu"
							width={"100%"}
							height={"100%"}
						/>
					</ThirdIlu>
				</ContentFigure>
			</GridContainer>

			<GridContainer>
				<ContentFigure>
					<FourthIlu>
						<Image
							src="/assets/omnipool/fourth-ilu.png"
							alt="fourth ilu"
							width={"100%"}
							height={"100%"}
						/>
					</FourthIlu>
				</ContentFigure>
				<Content>
					<H3>Earn rewards from Hydrated Farms</H3>
					<P>
						Provide liquidity for selected assets and receive additional rewards
						on top of trading fees. Paid out HDX or any other supported asset.
					</P>

					<Button>LEARN MORE</Button>
				</Content>
			</GridContainer>
		</Section>
	)
}

export default OmnipoolSection

const Section = styled.section`
	padding-top: 25rem;
	margin-bottom: 25rem;
`

const Content = styled.div`
	/* border: 1px solid red; */
	align-self: center;
`

const ContentFigure = styled.figure`
	/* border: 1px solid blue; */
`

const FirstIlu = styled.figure`
	max-width: 47.408rem;
`

const SecondIlu = styled.figure`
	max-width: 47.408rem;
	transform: scale(1.7);
	margin-top: 8rem;
	padding-right: 4rem;
`

const ThirdIlu = styled.figure`
	max-width: 47.408rem;
`

const FourthIlu = styled.figure`
	max-width: 49.2rem;
`
