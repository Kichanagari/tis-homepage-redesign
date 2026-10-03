const styles = {
  primary: 'bg-primary text-on-primary hover:opacity-90',
  outline: 'border-2 border-primary text-text hover:bg-primary hover:text-on-primary',
}

export default function Button({ href, variant = 'primary', children, className = '', ...rest }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
