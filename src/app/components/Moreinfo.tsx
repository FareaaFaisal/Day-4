import { useState } from "react";
import CommentBox from "./Comment";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="px-4 md:px-10 lg:px-0"> {/* Added padding for mobile */}
      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mt-2 md:mt-20 mb-10 lg:ml-[-500px] ml-0 justify-center">
        <p
          onClick={() => setActiveTab("description")}
          className={`py-2 px-6 md:px-8 cursor-pointer ${
            activeTab === "description"
              ? "bg-[#FF9F0D] text-white"
              : "text-gray-600"
          }`}
        >
          Description
        </p>

        <p
          onClick={() => setActiveTab("reviews")}
          className={`py-2 px-6 md:px-8 cursor-pointer ${
            activeTab === "reviews"
              ? "bg-[#FF9F0D] text-white"
              : "text-gray-600 hover:bg-[#FF9F0D] hover:text-white"
          }`}
        >
          Reviews
        </p>
      </div>

      {/* Conditionally render content based on active tab */}
      <div>
        {activeTab === "description" && (
          <div className="mb-10 md:mb-20">
            <p className="mt-6 md:mt-10 text-justify mx-2 md:ml-[160px] md:mr-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptas, assumenda illo ut, incidunt dolorum obcaecati fuga tempore repellendus, itaque molestiae ad explicabo tenetur quibusdam dolorem optio. Mollitia, ut beatae.
              Maiores, sed ab repudiandae libero saepe veniam non sapiente ipsam commodi distinctio architecto deleniti, sint voluptatum natus molestias perferendis laboriosam debitis repellat alias mollitia corrupti nisi quas. Voluptate, odit repellat.
            </p>

            <p className="mt-6 md:mt-10 text-justify mx-2 md:ml-[160px] md:mr-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptas, assumenda illo ut, incidunt dolorum obcaecati fuga tempore repellendus, itaque molestiae ad explicabo tenetur quibusdam dolorem optio. Mollitia, ut beatae.
              Maiores, sed ab repudiandae libero saepe veniam non sapiente ipsam commodi distinctio architecto deleniti, sint voluptatum natus molestias perferendis laboriosam debitis repellat alias mollitia corrupti nisi quas. Voluptate, odit repellat.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="mb-10 md:mb-20">
            <p className="mt-6 md:mt-10 text-justify mx-2 md:ml-[160px] md:mr-20">
              <CommentBox />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
