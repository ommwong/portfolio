import React from 'react';
import socialMedia from "../../../data/socialMedia.json";
import data from "./../../../data/data";
import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink, FooterSocialMedia } from './style'
import {ContainerLayout, ButtonDefault} from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
						<FooterSocialMedia>
							{socialMedia.map(({ id, name, url }) => (
								<li key={id}>
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink>
								</li>
							))}
						</FooterSocialMedia>
						<div>
							<p className="text-primary quote"> Let's chat! </p>
							<ButtonDefault href={`mailto:${data.SiteContact.email}`}> Email me </ButtonDefault>
						</div>
					</FooterBody>
					<div className="box">
						<SubRight> Powered by coffee and 🍷 </SubRight>
						<CopyRight className="text-dark">
							©
							<span> {new Date().getFullYear()}, Built with {` `}
								<a href="https://www.gatsbyjs.org">Gatsby</a>{" "}
          		</span>
							by {data.SiteAuthor} </CopyRight>
					</div>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;