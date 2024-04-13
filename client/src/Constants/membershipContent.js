import CoreBenifits from "../Assets/benifits.png";
import Knowledge from "../Assets/knowledge.png";
import Community from "../Assets/community.png";
import Profession from "../Assets/profession.png";
import AddOns from "../Assets/addOns.png";
import Membership from "../Assets/membership.png";

const JOIN_IEEE_HREF = "https://www.ieee.org/membership/join/index.html?utm_source=button_text&utm_medium=lp-membership&utm_campaign=join";

const CARD_INFO = [
    {
        id: 1,
        title: "Core Benefits",
        img: CoreBenifits,
        description: "Access exclusive technical information, networking, career tools through IEEE, the largest technical society worldwide."
    },
    {
        id: 2,
        title: "Knowledge",
        img: Knowledge,
        description: "Stay updated with IEEE Spectrum, The Institute, IEEE Potentials magazines, IEEE Xplore, What's New @IEEE newsletters."
    },
    {
        id: 3,
        title: "Community",
        img: Community,
        description: "Connect with 365,000 global members via IEEE Sections, Technical Chapters, email alias, ShopIEEE discounts, volunteering, and myIEEE portal."
    },
    {
        id: 4,
        title: "Profession",
        img: Profession,
        description: "Utilize IEEE Job Site, Career Alert, Continuing Education Partners Program, awards, scholarships, consultants database, and Today's Engineer webzine."
    },
    {
        id: 5,
        title: "Add-On Benefits",
        img: AddOns,
        description: "Access IEEE Member Digital Library, Proceedings of the IEEE, insurance, financial, home & office, and travel services."
    },
    {
        id: 6,
        title: "Additional Memberships",
        img: Membership,
        description: "Explore IEEE Society, Standards, and Women in Engineering memberships for expanded technical knowledge and networks."
    }
];

export { CARD_INFO, JOIN_IEEE_HREF };