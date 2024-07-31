import Header from "./header";
import Footer from "./footer";
function View() {
  return (
    <div class="max-w-screen-md mx-auto text-center">
      <Header />
      <h1> My view Section</h1>
      <div>
        <h2>Introduction</h2>
        <p class="mb-3 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem
          saepe suscipit facere aliquid, non, consectetur similique, ut eum sed
          mollitia autem delectus ab. Sequi recusandae quam quaerat saepe
          provident.
        </p>
      </div>
      <div>
        <h2> Importent Topic</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
          eaque, repudiandae, voluptas rerum ex recusandae id dolorum accusamus
          tenetur commodi velit fugiat corporis numquam? Alias deleniti aliquid
          quo optio voluptate.
        </p>
      </div>
      <div>
        <h2>Even more important Subject</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius
          illum amet soluta quas nesciunt impedit aperiam porro velit optio ab
          eos quia nam, quis incidunt maiores nisi. Tenetur, omnis?
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default View;
