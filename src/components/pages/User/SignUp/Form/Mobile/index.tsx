import { z } from 'zod';
import Link from 'next/link';
import Route from '@config/routes';
import { useRouter } from 'next/router';
import { useUser } from '@contexts/User';
import { memo, useMemo, useState } from 'react';
import { IconArrowLeft } from '@tabler/icons-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm, FieldPath } from 'react-hook-form';
import { Stepper, Button, Group, Loader, Container, Anchor, Center, Box } from '@mantine/core';
import steppers from './Stepper';
import submit from '../../submit';
import { FieldValues } from '../../types';
import { signUpSchema, defaultValues } from '../../schema';

function MobileSignUpForm() {
  const router = useRouter();
  const { dispatch } = useUser();
  const [active, setActive] = useState(0);
  const { termsWatched, ...restDefaultValues } = defaultValues;
  const { termsWatched: termsWatchedSchema, ...restSchema } = signUpSchema;

  const methods = useForm({
    resolver: zodResolver(
      z.object(restSchema).refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: '與密碼不相符',
        path: ['confirmPassword'],
      })
    ),
    defaultValues: restDefaultValues,
    mode: 'onTouched',
  });

  const handleNextStep = async () => {
    const formFields: FieldPath<Omit<FieldValues, 'termsWatched'>>[][] = [
      ['firstName', 'lastName'],
      ['email'],
      ['password', 'confirmPassword'],
    ];

    const isStepValid = await methods.trigger(formFields[active]);
    if (isStepValid) {
      setActive((current) => (current < 3 ? current + 1 : current));
    }
  };

  const handlePrevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const handleSubmit = methods.handleSubmit((data) => {
    submit(data, router, dispatch);
    handleNextStep();
  });

  const backButton = useMemo(
    () => (
      <Button variant="default" onClick={handlePrevStep}>
        Back
      </Button>
    ),
    [active]
  );
  const nextButton = useMemo(() => <Button onClick={handleNextStep}>Next step</Button>, [active]);

  return (
    <FormProvider {...methods}>
      <form>
        <Stepper active={active}>
          {steppers.map((stepper, index) => (
            <Stepper.Step
              key={`${stepper.label}-${index}`}
              label={stepper.label}
              icon={stepper.icon}
            >
              {stepper.step}
            </Stepper.Step>
          ))}
          <Stepper.Completed>
            <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
              <Loader size="lg" />
            </Container>
          </Stepper.Completed>
        </Stepper>

        {active === 0 ? (
          <Group position="apart" mt="xl">
            <Anchor component={Link} color="dimmed" href={Route.login} size="sm">
              <Center inline>
                <IconArrowLeft size={16} />
                <Box ml={5}>Back to login page</Box>
              </Center>
            </Anchor>
            {nextButton}
          </Group>
        ) : null}

        {active === 1 ? (
          <Group position="right" mt="xl">
            {backButton}
            {nextButton}
          </Group>
        ) : null}

        {active === 2 ? (
          <Group position="right" mt="xl">
            {backButton}
            <Button type="submit" loading={methods.formState.isSubmitting} onClick={handleSubmit}>
              Sign up
            </Button>
          </Group>
        ) : null}
      </form>
    </FormProvider>
  );
}

export default memo(MobileSignUpForm);
