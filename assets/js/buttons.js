class WebsiteButton extends React.Component {
  goToWebsite = () => {
    // Replace 'https://example.com' with the desired website URL
    window.location.href = 'https://example.com';
  };

  render() {
    return (
      <button onClick={this.goToWebsite}>Go to Website</button>
    );
  }
}

export default WebsiteButton;