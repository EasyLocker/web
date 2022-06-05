export default interface BookedLocker {
  id: string,
  name: string,
  latitude: number,
  longitude: number,
  width: number,
  height: number,
  depth: number,
  userId: string,
  bookedAt: string
}
