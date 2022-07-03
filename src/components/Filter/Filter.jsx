import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Field } from './Filter.styled';
export const Filter = ({ value, onChange }) => {
  const inputIdGenerate = nanoid();
  return (
    <>
      <label htmlFor={inputIdGenerate}>Find contacts by name</label>
      <Field
        type="text"
        value={value}
        onChange={onChange}
        id={inputIdGenerate}
      />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
