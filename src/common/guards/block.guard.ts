// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
// import { BlockService } from '../../modules/block/block.service';
// import { Op } from 'sequelize';

// @Injectable()
// export class BlockGuard implements CanActivate {
//   constructor(private readonly blockService: BlockService) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     // const request = context.switchToHttp().getRequest();
//     // // get user block list !
//     // //
//     // const blockList = await this.blockService.findBlockGroup({
//     //   where: {
//     //     [Op.or]: [
//     //       { blockerId: request.user.id },
//     //       { blockedUserId: request.user.id },
//     //     ],
//     //   },
//     // });
//     // request.user.blockList = blockList;
//     // //
//     return true;
//   }
// }
