import s from './ModalProjectCard.module.scss';
import projects from '../../../data/projects';
import { BiLinkExternal } from 'react-icons/bi';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/UIElements/Button/Button';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useModal } from '../../../hooks/modalHook';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ModalProjectCard = () => {
  const { id } = useParams();
  const { image, title, links, technologies,link_name } = projects.find(
    (p) => id === p.id,
  );
  const { isVisible, toggleModal } = useModal();

  useEffect(() => {
    toggleModal();
  }, []);

  return (
    <Modal show={isVisible} onClose={toggleModal}>
      <div className={s.cardWrapper}>
        <LazyLoadImage
          alt="project-img"
          src={image.src}
          effect="blur"
          width="100%"
          wrapperClassName={s.image}
          placeholderSrc={image.placeholderSrc}
        />

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>

          <div className={s.technologies}>
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>

        <div className={s.cardFooter}>
     
          <Button
            style={{ width: '12rem' }}
            className="primary"
            href={links.first}
            target="_blank"
          >
            <BiLinkExternal /> &nbsp; {link_name.first}
          </Button>

          {!!links.second && (
            <Button
              style={{ width: '12rem' }}
              className="primary"
              href={links.second}
              target="_blank"
            >
              <BiLinkExternal /> &nbsp; {link_name.second}
            </Button>
          )}
          

          {!!links.third && (
            <Button
              style={{ width: '12rem' }}
              className="primary"
              href={links.third}
              target="_blank"
            >
              <BiLinkExternal /> &nbsp; {link_name.third}
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalProjectCard;
