import React, { FC, useEffect } from "react";
import getConfig from "next/config";

import showRecaptcha from "../helpers/recaptcha";
import { useStoreState } from "../store";
import { ColCenter } from "./Layout";
import ReCaptcha from "./ReCaptcha";
import ALink from "./ALink";
import Text from "./Text";

const { publicRuntimeConfig } = getConfig();

const Footer: FC = () => {
  const { isAuthenticated } = useStoreState((s) => s.auth);

  useEffect(() => {
    showRecaptcha();
  }, []);

  return (
    <ColCenter
      as="footer"
      width={1}
      backgroundColor="white"
      p={isAuthenticated ? 2 : 24}
    >
      {!isAuthenticated && <ReCaptcha />}
      <Text fontSize={[12, 13]} py={2}>
      Powered by Open Source Project Kutt, Made with love by{" "}
        <ALink href="//thedevs.network/" title="The Devs" target="_blank">
          The Devs
        </ALink>
        .{" | "}
        <ALink
          href="https://github.com/thedevs-network/kutt"
          title="GitHub"
          target="_blank"
        >
          GitHub
        </ALink>
      </Text>
    </ColCenter>
  );
};

export default Footer;
