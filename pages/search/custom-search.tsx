import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const CustomSearchPage: NextPageWithLayout = () => {
  const MAX_STEPS = 3;
  const [formStep, setFormStep] = useState(0);

  const {
    register,
    watch,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      skills: '',
      job_details: '',
      starting_date: '',
      job_title: '',
      job_description: '',
      min_budget: '',
      max_budget: '',
    },
    mode: 'all',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const renderButton = () => {
    if (formStep > MAX_STEPS) {
      return undefined;
    }
    if (formStep === MAX_STEPS) {
      return (
        <div className="absolute bottom-5 right-5 flex gap-3">
          <Button
            type="button"
            onClick={() => setFormStep((prev) => prev - 1)}
            variant="outlined"
          >
            Back
          </Button>
          <Button type="submit" disabled={!isValid}>
            Post Job & View Talent
          </Button>
        </div>
      );
    } else {
      return (
        <div className="absolute bottom-5 right-5 flex gap-3">
          {formStep !== 0 && (
            <Button
              type="button"
              onClick={() => setFormStep((prev) => prev - 1)}
              variant="outlined"
            >
              Back
            </Button>
          )}
          <Button type="button" onClick={() => setFormStep((prev) => prev + 1)}>
            Next Step
          </Button>
        </div>
      );
    }
  };

  return (
    <div className="min-h-[75vh]">
      <h1>Busca Personalizada</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between"
        action=""
      >
        {formStep <= 0 && (
          <section className={formStep === 0 ? 'block' : 'hidden'}>
            <div className="flex flex-col gap-3">
              <h2>Skills</h2>
              <label htmlFor="skills">Skills for this role</label>
              <input
                className="border border-gray-600"
                type="text"
                {...register('skills', { required: 'this is mandatory' })}
              />
              {errors.skills && (
                <p className="text-sm text-red-300">{errors.skills.message}</p>
              )}
            </div>
          </section>
        )}
        {formStep <= 1 && (
          <section className={formStep === 1 ? 'block' : 'hidden'}>
            <div className="flex flex-col gap-3">
              <h2>Job Details</h2>
              <div>
                <label htmlFor="skills">Role type*</label>
                <select
                  {...register('job_details', {
                    required: 'this is mandatory',
                  })}
                >
                  <option value="1"> Option1 </option>
                  <option value="1"> Option1 </option>
                  <option value="1"> Option1 </option>
                  <option value="1"> Option1 </option>
                </select>
              </div>
              <div>
                <label htmlFor="title">Starting date</label>
                <input
                  className="border border-gray-600"
                  type="title"
                  {...register('starting_date', {
                    required: 'this is mandatory',
                  })}
                />
              </div>
              <div>
                <label htmlFor="title">Job Title</label>
                <input
                  className="border border-gray-600"
                  type="title"
                  {...register('job_title', { required: 'this is mandatory' })}
                />
              </div>
              <div>
                <label htmlFor="title">Job Descriptio</label>
                <textarea
                  className="border border-gray-600"
                  {...register('job_description', {
                    required: 'this is mandatory',
                  })}
                />
              </div>
            </div>
          </section>
        )}

        {formStep <= 2 && (
          <section className={formStep === 2 ? 'block' : 'hidden'}>
            <div className="flex flex-col gap-3">
              <h2>Budget</h2>
              <small>
                $4,900.00 USD is the avarage budget for Part-Time (20h) jobs
                with similar skills
              </small>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <label htmlFor="job_details">Minimun budget USD</label>
                  <input
                    className="border border-gray-600"
                    type="text"
                    {...register('min_budget', {
                      required: 'this is mandatory',
                    })}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="job_details">Max budget USD</label>
                  <input
                    className="border border-gray-600"
                    type="text"
                    {...register('max_budget', {
                      required: 'this is mandatory',
                    })}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {renderButton()}
        {JSON.stringify(isValid, null, 2)}
      </form>
    </div>
  );
};

CustomSearchPage.getLayout = (page) => {
  return <PrimaryLayout pageTitle="Custom Search">{page}</PrimaryLayout>;
};
export default CustomSearchPage;
