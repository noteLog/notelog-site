import React from "react";
import { FaGithub, FaReddit, FaStackOverflow, FaTwitter } from "react-icons/fa";

import { COLORS } from "../../utils/constants";

interface ISocialLinkProps {
    link: {
        title: string;
        href: string;
    }
}
const SocialLink: React.FunctionComponent<ISocialLinkProps> = (props) => (
    <a href={ props.link.href } title={ props.link.title } target="_blank" css={{
        color: "inherit",
        fontSize: "1.5em",
        margin: 5,
    }}>
        { props.children }
    </a>
);

const SocialLinks: React.FunctionComponent = () => (
    <div>
        <SocialLink link={{ title: "GitHub", href: "https://github.com/noteLog" }}>
            <FaGithub />
        </SocialLink>
        <SocialLink link={{ title: "Twitter", href: "https://twitter.com/tansawit" }}>
            <FaTwitter />
        </SocialLink>
    </div>
);

const FooterLinks: React.FunctionComponent = () => (
    <div css={{
        padding: "2rem 8rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap-reverse",
        color: COLORS.GREY,
        backgroundColor: COLORS.DARK,
        fontSize: ".8em",
    }}>
        <div></div>
        <SocialLinks />
    </div>
);

const MetaFooter: React.FunctionComponent = () => (
    <div css={{
        padding: "2rem 8rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        color: COLORS.GREY,
        fontSize: ".8em",
    }}>
        <div>
            Project by <a href="https://tansawit.me" target="__blank">tansawit</a>
        </div>
        <div>
            &copy; Sawit Trisirisatayawong
        </div>
    </div>
);

const Footer: React.FunctionComponent = () => (
    <footer css={{
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
    }}>
        <FooterLinks />
        <MetaFooter />
    </footer>
);

export default Footer;
