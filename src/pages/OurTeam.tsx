import MarketingCard2 from "../components/MarkeingBanners/MarketingCard2";

import TeamCard from "../components/TeamCard";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

import VictorSolorzImg from "../assets/images/teamMemberVS.jpeg";

export default function OurTeam() {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="mt-3 text-h1 text-center">
        <strong>Our Team</strong>
      </h1>
      <div className="flex justify-center">
        <TeamCard teamImage={VictorSolorzImg}>
          <span>
            <strong>Manuel Plata</strong>
          </span>{" "}
          <Trans
            i18nKey="manuel_profile"
            components={{
              span: <span />,
              em: <em />,
            }}
          />
        </TeamCard>
      </div>
    </>
  );
}
