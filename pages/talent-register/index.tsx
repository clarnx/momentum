import { ErrorMessage } from '@hookform/error-message';
import {
  Avatar,
  Button,
  Chip,
  Input,
  Option,
  Select,
  Textarea,
} from '@material-tailwind/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TiDeleteOutline } from 'react-icons/ti';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { IUser } from '../../interfaces/user.interface';
import { CountriesList } from '../../lib/countries/countriesList';
import { failedAlert } from '../../services/notification.service';
import { NextPageWithLayout } from '../page';

const TalentRegisterPage: NextPageWithLayout = () => {
  return (
    <div>
      <div className=" pb-6 text-blue-gray-800">
        <h1 className="text-blue-gray-800 font-bold text-3xl">
          Partner application
        </h1>
        <small className="tracking-wider">
          Enter personal data and details and start journey with us
        </small>
      </div>
      <div>
        <RegisterForm />
      </div>
    </div>
  );
};

TalentRegisterPage.getLayout = (page) => {
  return <PrimaryLayout pageTitle="Talent Register">{page}</PrimaryLayout>;
};
export default TalentRegisterPage;

interface IRegisterForm {
  preloadValues?: IUser;
}

const RegisterForm = ({ preloadValues }: IRegisterForm) => {
  const [skill, setSkill] = useState<string>('');
  const [skillsArray, setSkillsArray] = useState<string[]>([]);
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
      console.log(skillsArray);
      console.log(picture);
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

  const addSkillToArray = () => {
    if (skill.trim().toLocaleLowerCase() !== '') {
      let value = skill?.trim().toLocaleLowerCase();
      if (!skillsArray.includes(value)) {
        const newArray = [...skillsArray];
        newArray.unshift(value);
        setSkillsArray(newArray);
        setSkill('');
      }
    }
  };

  const deleteSkill = (value: string) => {
    let newArray = [...skillsArray];
    newArray = newArray.filter(
      (skill) => skill !== value.trim().toLocaleLowerCase()
    );
    setSkillsArray(newArray);
  };

  return (
    <div>
      <form className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-3">
          <div className="flex-grow">
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
          <div className="flex-grow">
            <Controller
              name="lastName"
              control={control}
              rules={{ required: 'This is required.' }}
              render={({ field }) => <Input label="Last Name" {...field} />}
            />
            <ErrorMessage
              as={'span'}
              className={'text-red-400 text-xs'}
              errors={errors}
              name="lastName"
            />
          </div>
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

        <div className="flex gap-3 flex-wrap">
          <div className="w-full sm:w-fit">
            <Controller
              name="phone.prefix"
              rules={{
                maxLength: { value: 4, message: 'Too many numbers' },
              }}
              control={control}
              render={({ field }) => (
                <Input
                  className="w-full sm:w-fit"
                  label="Prefix"
                  type={'number'}
                  {...field}
                />
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
          <div className="flex-grow">
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
            render={({ field }) => (
              <Select label="Country" {...field}>
                {CountriesList.map((item) => {
                  return (
                    <Option key={item.code} value={item.code}>
                      {item.name}
                    </Option>
                  );
                })}
              </Select>
            )}
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
          <div className=" flex flex-col gap-3">
            <Input
              label="Add your skills"
              onKeyDown={(e) => (e.key === 'Enter' ? addSkillToArray() : null)}
              onChange={(e) => setSkill(e.target.value)}
              value={skill}
            />
            <Button
              onClick={addSkillToArray}
              className="text-xs lowercase h-6 w-12 p-0 m-0"
              color="gray"
              size="sm"
            >
              add
            </Button>
          </div>
          <div className="flex gap-3 flex-wrap py-4">
            {skillsArray.map((skill, index) => (
              <Chip
                className="capitalize"
                key={index}
                value={skill}
                icon={
                  <TiDeleteOutline
                    title="Delete Skill"
                    size={20}
                    cursor="pointer"
                    onClick={() => deleteSkill(skill)}
                  />
                }
              />
            ))}
          </div>
        </div>

        <div>
          <label className="cursor-pointer" htmlFor="coverImage">
            <Avatar
              className=""
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
          <Button
            onClick={handleSubmit(onSubmit)}
            disabled={!isValid}
            type="button"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
