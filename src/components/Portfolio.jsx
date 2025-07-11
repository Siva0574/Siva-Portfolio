import '../styles/components/Portfolio.scss';

const Portfolio = () => {
  const handleResumeDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Sivakumar CV.pdf';
    link.download = 'Sivakumar_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <a
        className="block-btn"
        href="#" 
        onClick={handleResumeDownload}
        rel="noopener noreferrer">
        <span className="text">View my full resume</span>
        <img className="icon" src="img/icons/download.png" alt="download resume" />
      </a>
  );
};

export default Portfolio;
