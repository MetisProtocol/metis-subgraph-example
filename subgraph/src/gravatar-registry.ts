import {
  NewGravatar,
  UpdatedGravatar,
} from "../generated/GravatarRegistry/GravatarRegistry";
import { Gravatar } from "../generated/schema";

export function handleNewGravatar(event: NewGravatar): void {
  let gravatar = new Gravatar(event.params.id.toHex());
  gravatar.owner = event.params.owner;
  gravatar.displayName = event.params.displayName;
  gravatar.imageUrl = event.params.imageUrl;
  gravatar.save();
}

export function handleUpdatedGravatar(event: UpdatedGravatar): void {
  let gravatar = Gravatar.load(event.params.id.toHex());
  if (!gravatar) {
    gravatar = new Gravatar(event.params.id.toHex());
  }
  gravatar.owner = event.params.owner;
  gravatar.displayName = event.params.displayName;
  gravatar.imageUrl = event.params.imageUrl;
  gravatar.save();
}
