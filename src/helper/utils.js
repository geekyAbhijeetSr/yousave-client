export function bytesToSize(bytes) {
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
	if (bytes === 0) return '0 Byte'
	const i = Math.floor(Math.log(bytes) / Math.log(1024))
	if (i === 0) return `${bytes} ${sizes[i]}`
	const val = bytes / Math.pow(1024, i)
	if (i <= 2) {
		return `${val.toFixed(1)} ${sizes[i]}`
	} else if (i <= 4) {
		return `${val.toFixed(1)} ${sizes[i]}`
	} else {
		return `${val.toFixed(1)} ${sizes[i]}`
	}
}
