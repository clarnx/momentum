import { ErrorMessage } from '@hookform/error-message';
import { Button, Input, Textarea } from '@material-tailwind/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const TalentRegisterPage = () => {
  const [skills, setSkills] = useState();
  const [picture, setPicture] = useState<any>();
  const {
    control,
    handleSubmit,
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
      picture: '',
      experiencie_years: '',
    },
    mode: 'onChange',
  });
  const onSubmit = (data: any) => console.log(data);
  const handlePicture = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setPicture(e.target.files[0]);
    } else {
      setPicture(null);
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
          <input
            type="file"
            onChange={(e) => handlePicture(e)}
            accept="image/*"
          />
        </div>

        <div>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default TalentRegisterPage;
