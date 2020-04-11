import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/modals/About'
import Work from '../components/modals/Work'
import Contact from '../components/modals/Contact'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articleVisible: '',
      timeout: false,
      articleTimeout: false,
      loading: 'is-loading',
    }
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', this.handleClickOutside.bind(this))
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleOpenArticle(article) {
    console.log(article)

    this.setState({
      articleVisible: article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleVisible: '',
      })
    }, 350)
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.articleVisible !== '') {
        this.handleCloseArticle()
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div
          className={`body ${this.state.loading} ${
            this.state.articleVisible !== '' ? 'is-article-visible' : ''
          }`}
        >
          <div id="wrapper">
            <Header
              onOpenArticle={this.handleOpenArticle.bind(this)}
              timeout={this.state.timeout}
            />
            <div
              ref={this.setWrapperRef.bind(this)}
              id="main"
              style={
                this.state.timeout ? { display: 'flex' } : { display: 'none' }
              }
            >
              <About
                articleVisible={this.state.articleVisible}
                timeout={this.state.timeout}
                articleTimeout={this.state.articleTimeout}
                onCloseArticle={this.handleCloseArticle}
              />
              <Work
                articleVisible={this.state.articleVisible}
                timeout={this.state.timeout}
                articleTimeout={this.state.articleTimeout}
                onCloseArticle={this.handleCloseArticle}
              />
              <Contact
                articleVisible={this.state.articleVisible}
                timeout={this.state.timeout}
                articleTimeout={this.state.articleTimeout}
                onCloseArticle={this.handleCloseArticle}
              />
            </div>
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
