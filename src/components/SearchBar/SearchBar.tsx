import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

type Params = {
  handleSearch: (query: string) => void;
};

export default function SearchBar({ handleSearch }: Params) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, { resetForm }) => {
          handleSearch(values.query);
          resetForm(); 
        }}
      >
        {() => (
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              autoComplete="off"
              name="query"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={css.button} type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </header>
  );
}
