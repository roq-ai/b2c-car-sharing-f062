import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  customer_id: yup.string().nullable(),
  car_id: yup.string().nullable(),
});
