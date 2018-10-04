import React, {Component} from 'react';

import './App.css';
import 'semantic-ui-css/semantic.min.css';
import * as styleHelper from './helpers/styleHelper';

import MoviesPage from './components/pages/MoviesPage';
import Footer from './components/Footer';

import {Link, Route} from 'react-router-dom';
import {
  Container, Image, Menu, Visibility,
} from 'semantic-ui-react'

class App extends Component {
  state = {
    menuFixed: null,
    overlayFixed: false,
  };

  stickTopMenu = () => this.setState({menuFixed: true});

  unStickTopMenu = () => this.setState({menuFixed: null});

  render() {
    const {menuFixed} = this.state;

    return (
      <div className="App">
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}>
          <Menu borderless fixed={menuFixed && 'top'}
                style={menuFixed ? styleHelper.fixedMenuStyle : styleHelper.menuStyle}>
            <Container text>
              <Menu.Item>
                <Image size='mini' src='https://react.semantic-ui.com/logo.png'/>
              </Menu.Item>
              <Menu.Item as={Link} to='/'>Movie App</Menu.Item>
              <Menu.Item as={Link} to='/movies'>Movies</Menu.Item>
              <Menu.Item as='a'>Add New</Menu.Item>
            </Container>
          </Menu>
        </Visibility>

        <Container text>
          <Route path='/movies' component={MoviesPage}/>
          <hr/>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, harum neque? Architecto, cum dicta dolor
            eligendi expedita ipsam minima minus nemo nesciunt nulla officia possimus quae reprehenderit tempora ullam
            velit!
          </div>
          <div>Ab architecto assumenda error esse ex excepturi explicabo facere, illo iste itaque, minus nam officiis
            perspiciatis quis quo recusandae rem saepe totam unde veritatis? At cupiditate debitis dolorum modi nisi.
          </div>
          <div>A blanditiis corporis, debitis dignissimos earum enim est hic natus, nisi ratione rem repellendus,
            veniam! Aliquid assumenda, corporis error et itaque, magni maxime nostrum numquam perferendis placeat
            tempore vero voluptatibus.
          </div>
          <div>Ab atque corporis cumque ea explicabo facere fugit labore, laboriosam magni modi molestiae, nisi nulla
            omnis pariatur placeat porro qui quis repellat repellendus, repudiandae similique tempora temporibus totam
            voluptatem voluptatum.
          </div>
          <div>Aliquid at cupiditate ea fugiat inventore ipsum iusto minus nemo nobis quaerat sint tempore, vitae!
            Dignissimos doloremque dolorum fugiat, inventore iste nam nobis quas sapiente sint soluta ullam, unde
            voluptate!
          </div>
          <div>At blanditiis debitis dicta ducimus eligendi esse explicabo facere facilis inventore, itaque, molestiae
            nemo omnis provident saepe tempora, tenetur velit voluptatum. Ad asperiores corporis fuga illum non
            perspiciatis quisquam reiciendis?
          </div>
          <div>Aliquid beatae dignissimos eaque ex illum itaque, molestias nesciunt, omnis perspiciatis quam reiciendis
            sunt. Accusantium assumenda commodi, deserunt earum excepturi labore minus mollitia nemo nesciunt qui quis
            ut velit voluptatibus.
          </div>
          <div>Ad aliquam aspernatur corporis delectus dignissimos doloribus eligendi eos expedita fuga impedit incidunt
            iusto nesciunt nisi officiis pariatur placeat ratione recusandae repellendus rerum sed sint suscipit unde
            veritatis vitae, voluptatibus.
          </div>
          <div>Ab aut deleniti est impedit magnam pariatur, quam repudiandae tempore totam veniam! Ad aliquid at atque
            cupiditate facere modi omnis qui quis quos, similique. In nihil nisi nobis perspiciatis sed.
          </div>
          <div>Ab alias, amet aperiam consequatur consequuntur corporis culpa deleniti distinctio esse et, explicabo
            facilis fuga illo inventore minus neque numquam odio officiis omnis perspiciatis quae quaerat totam ullam,
            vero vitae.
          </div>
          <div>Architecto asperiores at eius eligendi fuga inventore ipsum molestias quibusdam repudiandae voluptate.
            Animi asperiores ducimus, expedita facere iste labore maiores optio quaerat ratione veritatis. Accusantium
            aut ipsum iure magnam vel!
          </div>
          <div>At deleniti excepturi nam perspiciatis sed, sequi voluptatum. Aliquam, deleniti, reprehenderit. Ab
            accusamus, asperiores dolorum excepturi expedita id molestias rerum? Aperiam id iusto perferendis quo
            reprehenderit sint tempora totam voluptates!
          </div>
          <div>Delectus dolorum excepturi fugit nesciunt obcaecati praesentium voluptatem? Aliquid animi, autem commodi
            consequatur corporis delectus ipsa ipsam magnam maxime officiis optio quasi quibusdam repellendus sed sequi
            totam veniam vitae voluptatum!
          </div>
          <div>Perspiciatis possimus rem sed tempore veniam! Architecto debitis dolores doloribus harum impedit laborum
            minima minus nihil praesentium tempora. Corporis dolorem eos, eum ex fuga iure odit officiis quam recusandae
            soluta!
          </div>
          <div>Ab adipisci assumenda autem cupiditate dolor dolores est fugiat itaque, libero magnam modi natus
            necessitatibus quam repudiandae soluta suscipit vitae voluptate voluptatem voluptatibus voluptatum. Dolore
            earum excepturi facere ipsam repudiandae?
          </div>
          <div>Aut debitis deserunt expedita impedit maxime necessitatibus non pariatur quam quis repellendus. Animi, at
            atque blanditiis commodi consectetur eligendi enim eum iusto quasi quia quo repellat rerum sapiente suscipit
            vitae!
          </div>
          <div>Alias ea explicabo officia, quam quis vel voluptate? Cupiditate dignissimos dolore eum impedit sint,
            voluptatem. Alias amet aut blanditiis dignissimos maiores non, nulla quae quaerat quisquam quos. Autem,
            praesentium, quaerat!
          </div>
          <div>Atque eius fugiat optio quas quis? Accusamus architecto asperiores, atque deleniti doloremque enim ex
            minima nulla optio possimus quas quibusdam quisquam rem sed tenetur unde ut veritatis? Iste rem, saepe.
          </div>
          <div>At atque doloribus eligendi eum excepturi expedita, explicabo ipsam iste iure maiores minus
            necessitatibus neque nobis obcaecati odit omnis similique totam unde veritatis voluptate! Doloribus
            exercitationem illum inventore labore voluptate!
          </div>
          <div>Aliquam distinctio enim pariatur porro. Corporis culpa deleniti eligendi eos et eveniet facere impedit
            libero magnam nihil odio odit pariatur porro praesentium provident quo quod repudiandae sint sunt, suscipit
            vero.
          </div>
        </Container>

        <Footer/>
      </div>
    );
  }
}

/**/

export default App;
