import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { CardStyle } from './Style';
// import CitizenCardHeading from '../../../components/heading/heading';
function CitizenCard({ item }) {
  const { t } = useTranslation();
  const { name, img, text } = item;
  return (
    <CardStyle>
      <figure>
        <img src={img} alt="" />
        <figcaption>
          <div className="gallery-single-content">
            <h2 className="font-bold">{t(name)}</h2>
            <p className="font-regular">{t(text)}</p>
          </div>
        </figcaption>
      </figure>
    </CardStyle>
  );
}
CitizenCard.propTypes = {
  item: PropTypes.object,
};
export default CitizenCard;
