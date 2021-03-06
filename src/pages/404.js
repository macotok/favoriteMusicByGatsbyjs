import React from "react"

import Default from "../components/Layouts/Default"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Default>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Default>
);

export default NotFoundPage
