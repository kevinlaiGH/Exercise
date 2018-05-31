import React from "react";
import image from "../images/expand-vertical-4.svg";
import Collapsible from "./Collapsible";
class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img src={image} />
          <h1>Fetch data</h1>
        </header>
        <div className="content">
          <div className="panel-group">
            <Collapsible title="Overview">
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute.
              </p>
            </Collapsible>
            <Collapsible title="Features">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia nostrum dolor at recusandae, repudiandae doloremque.
                Veniam, perspiciatis eos.
              </p>
            </Collapsible>
            <Collapsible title="Software">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                et minima ipsa non consequatur corrupti commodi animi assumenda
                impedit tenetur provident veniam, autem doloribus, possimus
                illum libero neque similique, quis corporis soluta blanditiis
                eligendi eveniet. At, alias tenetur. Reprehenderit a odit eum
                animi voluptatem ex officiis, suscipit officia iure. Dicta odio
                eum consequuntur saepe in sunt perspiciatis pariatur autem
                cupiditate repellat sapiente praesentium dolorum eveniet quas
                reiciendis et, ipsam id doloribus incidunt explicabo. Non odio
                praesentium in, placeat corrupti quidem ipsam, quasi a sapiente
                atque rem officia debitis consequuntur earum dolorem pariatur
                cumque natus, quibusdam illo iusto? Doloremque, soluta
                explicabo! Tenetur neque porro enim id exercitationem, iste
                commodi, assumenda possimus similique autem fugiat a impedit
                ipsum minus quasi soluta tempora, nesciunt perferendis laborum.
                Harum ad architecto quod nesciunt error, voluptatum consequatur
                ut, impedit deserunt eos rem eligendi explicabo corporis
                necessitatibus eius quisquam molestias illo beatae aspernatur
                nemo. Excepturi, alias quam! Repudiandae iste totam, explicabo
                deleniti commodi blanditiis facilis similique deserunt debitis,
                reiciendis ullam iusto, aliquam mollitia quas nihil quasi
                placeat quae praesentium doloribus ipsam quaerat! Quaerat
                accusamus dolor inventore sequi voluptate porro sapiente dolore
                aut assumenda iste quod corrupti nobis quos, consectetur
                possimus voluptates veritatis tempore. Excepturi quae officia
                minus doloribus maiores. Magni modi fugit, quibusdam cupiditate
                suscipit dolores recusandae harum quas natus autem quidem
                aperiam aliquid rerum quos id sapiente, laborum provident itaque
                enim voluptate architecto? Praesentium minima culpa velit
                quibusdam laboriosam modi delectus, minus aliquam tempora, quas
                neque recusandae corrupti. Alias adipisci ullam nihil tenetur
                rem eveniet quasi mollitia omnis voluptatum, temporibus deleniti
                laboriosam dolor autem dolores deserunt, voluptate beatae. Error
                nobis reiciendis nemo facilis eum et animi soluta cupiditate
                porro ipsa fugiat cum incidunt saepe beatae, eius explicabo a?
                Commodi quod quam iusto beatae sapiente voluptatibus eligendi
                est quae omnis. Error culpa voluptatem eius facere sequi fugit.
              </p>
            </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
