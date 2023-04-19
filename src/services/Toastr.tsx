import toast from 'react-hot-toast'

class Toastr {
  static success(message: any): void {
    toast.success(message, {
      style: { border: '1px solid #DCE0EB', borderRadius: '4px' },
      iconTheme: { primary: '#23526e', secondary: '#fff' }
    })
  }

  static warning(message: any): void {
    toast(message)
  }

  static info(message: any): void {
    toast(message)
  }

  static error(message: any): void {
    toast.error(message, {
      style: { border: '1px solid #DCE0EB', borderRadius: '4px' },
      iconTheme: { primary: '#5F1013', secondary: '#fff' }
    })
  }
}

export default Toastr
