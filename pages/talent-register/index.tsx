import { ErrorMessage } from '@hookform/error-message';
import { Avatar, Button, Input, Textarea } from '@material-tailwind/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { failedAlert } from '../../services/notification.service';

const TalentRegisterPage = () => {
  const [skills, setSkills] = useState();
  const [picture, setPicture] = useState<string | Blob>('');
  const [pictureURL, setPictureURL] = useState<string>();
  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      short_description: '',
      description: '',
      skills: [],
      linkedin: '',
      email: '',
      phone: {
        prefix: '',
        number: '',
      },
      country: '',
      experiencie_years: '',
    },
    mode: 'onChange',
  });
  const onSubmit = (data: any) => {
    if (isDirty && picture !== '') {
      console.log(data);
    } else {
      failedAlert('You should upload a profile picture');
    }
  };
  const handlePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (file) {
      setPicture(file);
      setPictureURL(URL.createObjectURL(file));
    } else {
      // setValue('picture', '', { shouldValidate: false });
    }
  };

  return (
    <div>
      <h1>Registro de Talentos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'This is required.' }}
            render={({ field }) => <Input label="Name" {...field} />}
          />
          <ErrorMessage
            as={'span'}
            className={'text-red-400 text-xs'}
            errors={errors}
            name="firstName"
          />
        </div>
        <div>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'This is required.' }}
            render={({ field }) => <Input label="lastName" {...field} />}
          />
          <ErrorMessage
            as={'span'}
            className={'text-red-400 text-xs'}
            errors={errors}
            name="lastName"
          />
        </div>

        <div>
          <Controller
            name="short_description"
            control={control}
            rules={{
              required: 'This is required.',
              maxLength: { value: 30, message: 'Too many characters' },
            }}
            render={({ field }) => (
              <Input label="Short Description" {...field} />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="short_description"
            render={({ message }) => (
              <p className={'text-red-400 text-xs'}>{message}</p>
            )}
          />
        </div>

        <div>
          <Controller
            name="description"
            control={control}
            rules={{
              required: 'This is required.',
              maxLength: { value: 200, message: 'Too many characters' },
            }}
            render={({ field }) => <Textarea label="Description" {...field} />}
          />
          <ErrorMessage
            errors={errors}
            name="description"
            render={({ message }) => (
              <p className={'text-red-400 text-xs'}>{message}</p>
            )}
          />
        </div>

        <div>
          <Controller
            name="linkedin"
            control={control}
            render={({ field }) => (
              <Input label="Linkedin Profile" type={'url'} {...field} />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="linkedin"
            render={({ message }) => (
              <p className={'text-red-400 text-xs'}>{message}</p>
            )}
          />
        </div>

        <div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input label="Email" type={'email'} {...field} />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <p className={'text-red-400 text-xs'}>{message}</p>
            )}
          />
        </div>

        <div>
          <div>
            <Controller
              name="phone.prefix"
              rules={{
                maxLength: { value: 4, message: 'Too many numbers' },
              }}
              control={control}
              render={({ field }) => (
                <Input label="Prefix" type={'number'} {...field} />
              )}
            />
            <ErrorMessage
              errors={errors}
              name="phone.prefix"
              render={({ message }) => (
                <p className={'text-red-400 text-xs'}>{message}</p>
              )}
            />
          </div>
          <div>
            <Controller
              name="phone.number"
              control={control}
              render={({ field }) => (
                <Input label="Phone" type={'number'} {...field} />
              )}
            />
            <ErrorMessage
              errors={errors}
              name="phone.number"
              render={({ message }) => (
                <p className={'text-red-400 text-xs'}>{message}</p>
              )}
            />
          </div>
        </div>

        <div>
          <Controller
            name="country"
            control={control}
            rules={{
              required: 'This is required.',
            }}
            render={({ field }) => <Input label="Country" {...field} />}
          />
          <ErrorMessage
            errors={errors}
            name="country"
            render={({ message }) => (
              <p className={'text-red-400 text-xs'}>{message}</p>
            )}
          />
        </div>

        <div>
          <Controller
            name="experiencie_years"
            control={control}
            rules={{
              maxLength: {
                value: 2,
                message:
                  'Think that maybe you have to many experiencie in the field',
              },
            }}
            render={({ field }) => (
              <Input type={'number'} label="Experiencie" {...field} />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="experiencie_years"
            render={({ message }) => (
              <p className={'text-red-400 text-xs'}>{message}</p>
            )}
          />
        </div>

        <div>
          <label className="cursor-pointer" htmlFor="coverImage">
            <Avatar
              size="xxl"
              src={pictureURL ? pictureURL : '/no-image.jpg'}
              alt="profile picture"
              variant="circular"
            />
          </label>
          <input
            id="coverImage"
            type="file"
            className="hidden cursor-pointer"
            onChange={(e) => handlePicture(e)}
            accept="image/*"
          />
        </div>

        <div>
          <Button disabled={!isValid} type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TalentRegisterPage;
