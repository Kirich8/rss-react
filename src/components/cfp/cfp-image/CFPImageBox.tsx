import { UseFormRegisterReturn } from 'react-hook-form';

enum ImageBox {
  image = 'image',
}

type CFPImageBoxProps = {
  register: (name: ImageBox) => UseFormRegisterReturn<ImageBox>;
  errorMessage?: string;
};

const CFPImageBox = ({ register, errorMessage }: CFPImageBoxProps) => {
  return (
    <div className="image-box">
      <label>Image: </label>
      <input type="file" {...register(ImageBox.image)} />
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};

export default CFPImageBox;
