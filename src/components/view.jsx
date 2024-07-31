import React from "react";
import Header from "./header";
import Footer from "./footer";

function View() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            My View Section
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              rem saepe suscipit facere aliquid, non, consectetur similique, ut
              eum sed mollitia autem delectus ab. Sequi recusandae quam quaerat
              saepe provident.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Important Topic
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
              eaque, repudiandae, voluptas rerum ex recusandae id dolorum
              accusamus tenetur commodi velit fugiat corporis numquam? Alias
              deleniti aliquid quo optio voluptate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Extremely Important Point
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              eius illum amet soluta quas nesciunt impedit aperiam porro velit
              optio ab eos quia nam, quis incidunt maiores nisi. Tenetur, omnis?
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default View;
