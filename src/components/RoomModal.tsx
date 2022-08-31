import React from "react";
import {Button, Checkbox, Label, Modal, TextInput} from "flowbite-react";

interface RoomProps {
    postModal: boolean,
    togglePostModal: (e: any) => void
    id: number,
    description: string,
    status: string,
    categoryName: string,
    price: number,
    bookingCount: number,
    setId: (e: any) => void
    setDescription: (e: any) => void
    setStatus: (e: any) => void
    setCategoryName: (e: any) => void
    setPrice: (e: any) => void
    setBookingCount: (e: any) => void
}

const RoomModal: React.FC<RoomProps> = ({postModal, togglePostModal, id, description, status, categoryName,
                                            price, bookingCount, setId, setDescription, setStatus, setCategoryName,
                                            setPrice, setBookingCount}) => {
    return(
        <Modal
            show={postModal}
            onClose={() => togglePostModal(false)}
        >
            <Modal.Header>
                Terms of Service
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Id"
                                />
                            </div>
                            <TextInput
                                onChange={(e) => setId(e.target.value)}
                                value={id}
                                id="email1"
                                type="email"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Description"
                                />
                            </div>
                            <TextInput
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                id="password1"
                                type="string"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Status"
                                />
                            </div>
                            <TextInput
                                onChange={(e) => setStatus(e.target.value)}
                                value={status}
                                id="password1"
                                type="string"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Category name"
                                />
                            </div>
                            <TextInput
                                onChange={(e) => setCategoryName(e.target.value)}
                                value={categoryName}
                                id="password1"
                                type="string"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Price"
                                />
                            </div>
                            <TextInput
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                id="password1"
                                type="string"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Booking Account"
                                />
                            </div>
                            <TextInput
                                onChange={(e) => setBookingCount(e.target.value)}
                                value={bookingCount}
                                id="password1"
                                type="string"
                                required={true}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">
                                Show password
                            </Label>
                        </div>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button color="gray" type="submit" onClick={() => togglePostModal(false)}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RoomModal;