import { useForm } from 'react-hook-form';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchContainer } from './Form.styled';

const Form = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <SearchContainer>
      <Form
        autoComplete="off"
        onSubmit={handleSubmit(({ query }) => onSubmit(query))}
      >
        <input
          {...register('query')}
          autoFocus
          placeholder="Search movie"
          size={40}
        ></input>
        <button type="submit">
          <span>
            <AiOutlineSearch width="16px" height="16px" />
          </span>
        </button>
      </Form>
    </SearchContainer>
  );
};

export default Form;
