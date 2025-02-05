import { useState } from "react";
import CommentBox from "./Comment";

// TabComponent doesn't need the slug prop anymore
const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-2 mt-20 mb-10 justify-center">
        <p
          onClick={() => setActiveTab("description")}
          className={`py-2 px-8 ml-[-550px] cursor-pointer ${activeTab === "description" ? "bg-[#FF9F0D] text-white" : "text-gray-600"}`}
        >
          Description
        </p>

        <p
          onClick={() => setActiveTab("reviews")}
          className={`py-2 px-8 cursor-pointer ${activeTab === "reviews" ? "bg-[#FF9F0D] text-white" : "text-gray-600 hover:bg-[#FF9F0D] hover:text-white"}`}
        >
          Reviews
        </p>
      </div>

      {/* Conditionally render content based on active tab */}
      <div>
        {activeTab === "description" && (
          <div className="mb-20">
            <p className="mt-10 ml-[160px] mr-20 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptas, assumenda illo ut, incidunt dolorum obcaecati fuga tempore repellendus, itaque molestiae ad explicabo tenetur quibusdam dolorem optio. Mollitia, ut beatae.
              Maiores, sed ab repudiandae libero saepe veniam non sapiente ipsam commodi distinctio architecto deleniti, sint voluptatum natus molestias perferendis laboriosam debitis repellat alias mollitia corrupti nisi quas. Voluptate, odit repellat.
            </p>

            <p className="mt-10 ml-[160px] mr-20 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptas, assumenda illo ut, incidunt dolorum obcaecati fuga tempore repellendus, itaque molestiae ad explicabo tenetur quibusdam dolorem optio. Mollitia, ut beatae.
              Maiores, sed ab repudiandae libero saepe veniam non sapiente ipsam commodi distinctio architecto deleniti, sint voluptatum natus molestias perferendis laboriosam debitis repellat alias mollitia corrupti nisi quas. Voluptate, odit repellat.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="mb-20">
            <p className="mt-10 ml-[160px] mr-20 text-justify">
              <CommentBox />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
