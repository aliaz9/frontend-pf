
export default function Alert ({ children, error }) {
  return (
    <div className={`${error ? 'alert-danger' : 'alert-success'} alert p-2 py-2   text-center`} role='alert' >
      {children}
    </div>
  )
}
