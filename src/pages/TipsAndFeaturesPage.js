import React from "react";
import Sidebar from "../components/Sidebar";
import Toogle from "../components/Toogle";
import Toogle1 from "../components/Toogle1";
import Toogle2 from "../components/Toogle2";

const TipsAndFeaturesPage = () => {
  return (
    <div className="TipsAndFeaturesPage">
      <Sidebar></Sidebar>
      <main className="tipsandfeatures">
        <section className="tips">
          <h1>TIPS</h1>

          <div className="tipsContents">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
              tempore ipsam dignissimos dolore blanditiis dolorum iure quis
              reprehenderit accusantium cumque fuga cupiditate placeat ad
              recusandae repudiandae obcaecati quae. Sunt natus quod perferendis
              suscipit illo et inventore aliquid deleniti amet vel.
            </p>
          </div>
        </section>

        <section className="features">
          <h1>FEATURES</h1>

          <div className="featuresContents">
            <p className="featuresContentsP">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <Toogle></Toogle>
            </p>

            <p className="featuresContentsP">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <Toogle1></Toogle1>
            </p>

            <p className="featuresContentsP">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <Toogle2></Toogle2>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TipsAndFeaturesPage;
